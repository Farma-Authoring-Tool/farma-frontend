import { useState, useEffect } from 'react';
import { getLos } from '../../services/Api'; 
import { HiPlus } from "react-icons/hi";
import './Lo.css';
import AppLayout from '../Layouts/AppLayout';
import { Card, Divider, Group, Input, Menu, Text, Button, Image, Accordion, Box, Table } from '@mantine/core';
import { FaAngleRight, FaChevronUp, FaMagnifyingGlass, FaPenToSquare, FaTrash } from 'react-icons/fa6';
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
  

  const rows = los.map((lo) => (
    <tr key={lo.id}>
      <td>{lo.id}</td>
      <td>{lo.title}</td>
      <td>{lo.description}</td>
      <td>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Link to={`/oa/${lo.id}/editar`}>
                <FaPenToSquare  color="ocean-blue" />
            </Link>
            <Link to={`/oa/${lo.id}/deletar`}
              style={{ marginLeft: '10px' }} >
                <FaTrash color="red" />
            </Link>
        </Box>
      </td>
    </tr>
  ));

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
          <Table highlightOnHover>
              <thead>
              <tr>
                <th>#</th>
                <th>Título</th>
                <th>Descrição</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
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
