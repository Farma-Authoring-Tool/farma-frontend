import React, { useState } from 'react';
import { useGetLo } from '../../services/Api'; // Importe useDeleteLo
import { HiPlus } from "react-icons/hi";
import AppLayout from '../Layouts/AppLayout';
import { Divider, Group, Input, Text, Button, Box, Table } from '@mantine/core';
import { FaAngleRight, FaEye, FaMagnifyingGlass, FaPenToSquare, FaTrash } from 'react-icons/fa6';
import { Link, useNavigate, useParams } from 'react-router-dom';


function LoShow() {
  const { id } = useParams();
  const { lo, error } = useGetLo(id);
  
 
  return (
    <>
      <AppLayout navbarLinkActive="home">
        <Group py={{ base: 'xs', sm: 'md', lg: 'xl' }}>
          <Text sx={{ fontFamily: 'sans-serif' }} fz="xl" color="dimmed">Início</Text>
          <FaAngleRight color="lime"/>
          <Text sx={{ fontFamily: 'sans-serif' }} fz="xl" color="dimmed">Meus OAs</Text>
        </Group>

        <Divider />

        <Text align="center" mt={10}>{lo ? lo.title : 'Título não disponível'}</Text>
        <Text mt={20} ml={20} mr={20}>{lo ? lo.description : 'Descrição não disponível'}</Text>

        <Divider />

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

export default LoShow;
