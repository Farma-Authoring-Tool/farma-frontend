import React, { useState } from 'react';
import { useGetLos, useDeleteLo } from '../../services/Api';
import { HiPlus } from "react-icons/hi";
import './index.css';
import AppLayout from '../Layouts/AppLayout';
import { Divider, Group, Input, Text, Button, Box, Table } from '@mantine/core';
import { FaAngleRight, FaEye, FaMagnifyingGlass, FaPenToSquare, FaTrash } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { Lo } from '../../types/Lo';


function Lo() {
  const { los, isLoading, error } = useGetLos();
  const [isDeleting, setDeleting] = useState(false);
  const deleteLo = useDeleteLo();
  const navigate = useNavigate();

  const handleDelete = async (id: Lo) => {
    try {
      setDeleting(true);
      await deleteLo(id);
      navigate('/oa');
    } catch (error) {
      console.error('Erro ao excluir LO:', error);
      setDeleting(false);
    }
  };

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Ocorreu um erro ao buscar os LOs.</p>;
  } else if (los?.length === 0) {
    content = <p>Nenhum LO encontrado.</p>;
  } else {
    const rows = los.map((lo: Lo, index: React.Key) => (
      <tr key={index}>
        <td>{lo.id}</td>
        <td>{lo.title}</td>
        <td>{lo.description}</td>
        <td>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Link to={`/oa/${lo.id}`}>
              <FaEye color="green" />
            </Link>
            <Link to={`/oa/${lo.id}/editar`} style={{ marginLeft: '10px' }}>
              <FaPenToSquare color="ocean-blue" />
            </Link>
            <FaTrash
              onClick={() => {
                if (window.confirm('Tem certeza que deseja excluir este LO?')) {
                  handleDelete(lo.id);
                }
              }}
              disabled={isDeleting}
              color="red"
              style={{ marginLeft: '10px' }}
              aria-label="Excluir LO"
            />
          </Box>
        </td>
      </tr>
    ));

    content = (
      <Table striped={true} highlightOnHover>
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
    );
  }

  return (
    <>
      <AppLayout navbarLinkActive="home">
        <Group py={{ base: 'xs', sm: 'md', lg: 'xl' }}>
          <Text sx={{ fontFamily: 'sans-serif' }} fz="xl" color="dimmed">Início</Text>
          <FaAngleRight color="lime"/>
          <Text sx={{ fontFamily: 'sans-serif' }} fz="xl" color="dimmed">Meus OAs</Text>
        </Group>

        <Divider />

        <Input mt={20} required maw={320} mx="auto" icon={<FaMagnifyingGlass />} placeholder="Busque ..." />

        <Group position="center" mt={30}>
          {content}
        </Group>

        <div style={{ position: "fixed", bottom: "30px", right: "30px" }}>
          <Link to="/oa/novo">
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
          </Link>
        </div>
      </AppLayout>
    </>
  );
}

export default Lo;
