import { useState, useEffect } from 'react';
import { getLos } from '../../services/Api'; 
import { HiPlus } from "react-icons/hi";
import './Lo.css';
import AppLayout from '../Layouts/AppLayout';
import { Card, Divider, Group, Input, Menu, Text, Button, Image, Accordion, Box } from '@mantine/core';
import { FaAngleRight, FaChevronUp, FaMagnifyingGlass, FaPenToSquare } from 'react-icons/fa6';
import oa from "../../assets/oa.png";
import { Link } from 'react-router-dom';

interface LoData {
  id: number;
  title: string;
  description: string;
  image: string;
}

function Lo() {
  const [los, setLos] = useState<LoData[]>([]);
  const [selectedLosId, setSelectedLosId] = useState<number | null>(null); 

  useEffect(() => {
    getLos()
    .then(response => {
      setLos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar LOs:', error);
      });
  }, []);
  

  return (
    <>
      <AppLayout navbarLinkActive="home">
        <Group py={{ base: 'xs', sm: 'md', lg: 'xl' }}>
          <Text sx={{ fontFamily: 'sans-serif' }} fz="xl" color="dimmed">Início</Text>
          <FaAngleRight color="lime"/>
          <Text sx={{ fontFamily: 'sans-serif' }} fz="xl" color="dimmed">Meus OAs</Text>
        </Group>

        <Divider />

        <Input mt={20} required maw={320} mx="auto"
          icon={<FaMagnifyingGlass />}
          placeholder="Busque ..."
        />

        <Group position="center" mt={30}>
          <Card shadow="sm" padding="xl" component="a">
            <Card.Section>
              <Image src={oa} height={320} maw={320} alt="imagem referência do oa" />
            </Card.Section>

            <Accordion
                chevron={<FaChevronUp size="1rem" />}
                styles={{
                    chevron: {
                        '&[data-rotate]': {
                            transform: 'rotate(45deg)',
                        },
                    },
                }}
            >
              <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text size="lg" mt="md" maw={300} sx={{ fontFamily: 'sans-serif' }} >
                      Teste
                  </Text>
                  <Link to="/oa/1/editar">
                      <FaPenToSquare color="lime" />
                  </Link>
              </Box>
            </Accordion>
          </Card>
        </Group>

        <Group position="center" mt={30}>
          {los.map(lo => (
            <Card key={lo.id} shadow="sm" padding="xl" component="a" >
              <Card.Section>
                <Image
                  src={oa}
                  height={320}
                  maw={320}
                  alt="imagem referência do oa"
                />
                {selectedLosId === lo.id && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text color="white"> {lo.description}</Text>
                  </div>
                )}
              </Card.Section>

              <Accordion
                chevron={<FaChevronUp size="1rem" />}
                styles={{
                  chevron: {
                    '&[data-rotate]': {
                      transform: 'rotate(45deg)',
                    },
                  },
                }}
                onChange={() => setSelectedLosId(lo.id)} 
                expanded={selectedLosId === lo.id}
              >
                <Text size="lg" mt="md" maw={300} sx={{ fontFamily: 'sans-serif' }} >
                  {lo.title}
                </Text>
              </Accordion>
            </Card>
          ))}
        </Group>

        <div style={{ position: "fixed", bottom: "30px", right: "30px" }}>
          <Menu offset={4} withArrow width={200} shadow="md">
            <Menu.Target>
              <Button
                size="md" 
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HiPlus size={24} />
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<HiPlus />} component="a" href="/oa/novo" >
                Criar um novo OA
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
        
      </AppLayout>
    </>
  );
}

export default Lo;
