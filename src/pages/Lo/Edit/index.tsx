import React, { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { useUpdateLo, useGetLo } from '../../../services/Api';
import { Button, Box, TextInput, Group, Text, Divider, Card, CloseButton } from '@mantine/core';
import AppLayout from '../../Layouts/AppLayout';
import { FaAngleRight, FaPaperPlane } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';

function LoEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: { title: '', description: '', image: '' },
    transformValues: (values) => ({
      title: String(values.title) || '',
      description: String(values.description) || '',
      image: String(values.image) || '',
    }),
  });

  const updateLo = useUpdateLo();
  const { lo, isLoading, error } = useGetLo(id);

  async function handleSubmit() {
    try {
      console.log(form.values); // Verifique os valores dos campos no console
      await updateLo(id, form.values); 
      navigate('/oa');
    } catch (error) {
      console.error('Erro ao editar o Objeto de Aprendizagem:', error);
    }
  }

  useEffect(() => {
    if (lo) {
      form.setValues((prevValues) => ({
        ...prevValues,
        title: lo.title,
        description: lo.description,
        image: lo.image,
      }));
    }
  }, [lo]);
  
  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro ao buscar os detalhes do OA.</p>;
  }

  return (
    <>
      <AppLayout >   
        <Group py={{ base: 'xs', sm: 'md', lg: 'xl' }}>
            <Text sx={{ fontFamily: 'sans-serif' }} fz="xl" color="dimmed">Início</Text>
            <FaAngleRight color="gray"/>
            <Text sx={{ fontFamily: 'sans-serif' }} fz="xl" color="dimmed">Meus OAs</Text>
            <FaAngleRight color="lime"/>
            <Text sx={{ fontFamily: 'sans-serif' }} fz="xl" color="dimmed">Editar OA</Text>
        </Group>

        <Divider />
  
        <Card mt={30} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Group w={'100%'} style={{ justifyContent:"space-between",  alignItems:"center" }} >
            <Box style={{ marginLeft: 'auto' }}>
              <Text sx={{ fontFamily: 'sans-serif' }} fz="xl" ta="center" color="dimmed">
                  Titulo OA
              </Text>
            </Box>

            <Box style={{ marginLeft: 'auto' }}>
                <CloseButton title="Close popover" size="xl" color="red" iconSize={20} onClick={() => navigate("/oa")} />
            </Box>
          </Group>
            
          <Box>
            
            <form onSubmit={(event) => { event.preventDefault(); handleSubmit()}} >
              <TextInput
                label="Título"
                placeholder="título do oa ..."
                {...form.getInputProps('title')}
                styles={{
                    input: {
                        borderBottom: '2px solid diamond',
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
                      borderBottom: '2px solid diamond',
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
                      border: '2px solid diamond',
                      width: '600px',
                      height: '100px',
                      padding: '4px',
                    },
                    
                }}
              />
            
              <Box style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                <Button type="submit" color='lime.5'>
                  Editar OA 
                  <FaPaperPlane style={{ marginLeft: '4px' }} />
                </Button>
              </Box>
            </form>
          </Box>
        </Card>
      </AppLayout>
    </>
  );
}

export default LoEdit;
