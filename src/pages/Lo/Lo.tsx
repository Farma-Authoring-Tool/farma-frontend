import React, { useState } from 'react';
import { useGetLos, useDeleteLo } from '../../services/Api'; // Importe useDeleteLo
import { HiPlus } from "react-icons/hi";
import './Lo.css';
import AppLayout from '../Layouts/AppLayout';
import { Divider, Group, Input, Text, Button, Box, Table } from '@mantine/core';
import { FaAngleRight, FaEye, FaMagnifyingGlass, FaPenToSquare, FaTrash } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Lo() {
  const { los, error } = useGetLos();
  const [isDeleting, setDeleting] = useState(false);
  const deleteLo = useDeleteLo();

  const handleDelete = async (id: any) => {
    try {
      setDeleting(true);
      await deleteLo(id);
      navigate('/oa');
    } catch (error) {
      console.error('Erro ao excluir LO:', error);
      setDeleting(false);
    }
  };

  const rows = los?.map((lo: any) => (
    <tr key={lo.id}>
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
          <FaTrash onClick={() => handleDelete(lo.id)} disabled={isDeleting} color="red" style={{ marginLeft: '10px' }} />
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
