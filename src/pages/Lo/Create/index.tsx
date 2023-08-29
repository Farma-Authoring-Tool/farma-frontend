import { useState, useEffect } from 'react';
import { useForm } from '@mantine/form';
// import { createLo } from '../../../services/Api'; 
import { Button, Box, TextInput, Code, Group, Text, Divider, Card, CloseButton } from '@mantine/core';
import AppLayout from '../../Layouts/AppLayout';
import { FaAngleRight, FaPaperPlane, FaX } from 'react-icons/fa6';
import { useNavigate } from "react-router-dom";
const API_BASE_URL = 'https://example.com/api';
import axios from 'axios'; 

async function createLo(title: string, description: string, image: string) {
  try {
    const response = await axios.post(`${API_BASE_URL}/los`, {
      title,
      description,
      image,
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar o Objeto de aprendizagem');
  }
}

  function LoCreate() {
    const [submittedValues, setSubmittedValues] = useState('');
    const navigate = useNavigate();
    const form = useForm({
      transformValues: (values) => ({
        title: String(values.title) || '',
        description: String(values.description) || '',
        image: String(values.image) || '',
      }),
    });

    const handleSubmit = async (values: any) => {
      try {
        await createLo(values.title, values.description, values.image);
  
        setSubmittedValues(JSON.stringify(values, null, 2));
      } catch (error) {
        console.error('Erro ao criar o Objeto de aprendizagem:', error);
      }
    };


  return (
    <>
      <AppLayout >   
        <Group py={{ base: 'xs', sm: 'md', lg: 'xl' }}>
            <Text sx={{ fontFamily: 'sans-serif' }} fz="xl" color="dimmed">Início</Text>
            <FaAngleRight color="gray"/>
            <Text sx={{ fontFamily: 'sans-serif' }} fz="xl" color="dimmed">Meus OAs</Text>
            <FaAngleRight color="lime"/>
            <Text sx={{ fontFamily: 'sans-serif' }} fz="xl" color="dimmed">Novo OA</Text>
        </Group>

        <Divider />
  
        <Card mt={30} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Group w={'100%'} justify="space-between" alignItems="center">
            <Box style={{ marginLeft: 'auto' }}>
              <Text sx={{ fontFamily: 'sans-serif' }} fz="xl" ta="center" color="dimmed">
                  Novo OA
              </Text>
            </Box>


            <Box style={{ marginLeft: 'auto' }}>
                <CloseButton title="Close popover" size="xl" color="red" iconSize={20} onClick={() => navigate("/oa")} />
            </Box>
          </Group>
            
          <Box>
            <form onSubmit={(event) => { event.preventDefault(); handleSubmit(form.values) }}>
              <TextInput
                label="Título"
                placeholder="título do oa ..."
                {...form.getInputProps('title')}
                styles={{
                    input: {
                        borderBottom: '2px solid dimond', 
                        width: '600px',
                        borderTop: 'none',
                        borderRight: 'none',
                        borderLeft: 'none',
                        borderRadius: '0px',
                    },
                }}
              />
              <TextInput
                label="Descrição"
                placeholder="Descrição"
                mt="md"
                {...form.getInputProps('description')}
                styles={{
                    input: {
                      borderBottom: '2px solid dimond', 
                      width: '600px',
                      borderTop: 'none',
                      borderRight: 'none',
                      borderLeft: 'none',
                      borderRadius: '0px',
                    },
                }}
              />

              <TextInput
                label="Imagem"
                placeholder="Imagem"
                mt="md"
                {...form.getInputProps('image')}
                styles={{
                    input: {
                      border: '2px solid dimond', 
                      width: '600px',
                      height: '100px',
                      padding: '4px',
                    },
                }}
              />
              
              {/* <FileInput
                mt="md" 
                label="Imagem do OA" 
                placeholder="Imagem do OA" 
                accept="image/png,image/jpeg" 
                styles={{
                  input: {
                    border: '2px solid lime', 
                    width: '600px',
                    padding: '40px',
                  },
                }}
              /> */}

              <Box style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
              <Button type="submit" color="lime.5">
                Criar OA
                <FaPaperPlane style={{ marginLeft: '4px' }} />
              </Button>
              </Box>
            </form>

            {submittedValues && <Code block>{submittedValues}</Code>}
          </Box>
        </Card>
      </AppLayout>
    </>
  );
}

export default LoCreate;
