import { Box, IconButton, Section, Table, Tooltip } from "@radix-ui/themes";
import SidebarLayout from "../../../components/ui/menubar";
import { useNavigate } from "react-router-dom";
import { useDeleteLo, useGetLos } from "../../services/Api";
import { useState } from "react";
import { Lo } from "@/types/Lo";
import { FaEye, FaPenToSquare, FaTrash } from "react-icons/fa6";
import { PlusIcon } from "@radix-ui/react-icons";

function Lo() {
  const { los, isLoading, error } = useGetLos();
  const [isDeleting, setDeleting] = useState(false);
  const deleteLo = useDeleteLo();
  const navigate = useNavigate();
  const myLoEdit = (id: Lo) => {
    navigate(`/oa/${id}/editar`);
  };
  const myLoShow = (id: Lo) => { navigate(`/oa/${id}`); };
  const loCreate = () => { navigate(`/oa/novo`); };

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
      <Table.Row key={index}>
        <Table.RowHeaderCell>{lo.title}</Table.RowHeaderCell>
        <Table.RowHeaderCell>{lo.description}</Table.RowHeaderCell>
        <Table.RowHeaderCell>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <FaEye color="green" onClick={() => { myLoShow(lo.id); }} />
            <FaPenToSquare color="blue" style={{ marginLeft: '10px' }} onClick={() => { myLoEdit(lo.id); }} />
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
        </Table.RowHeaderCell>
      </Table.Row>
    ));

    content = (
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Título</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Descrição</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Ações</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table.Root>
    );
  }

  return (
    <>
      <SidebarLayout></SidebarLayout>

      <Box p='8'>
        {content}
      </Box>

      <Section align="end" style={{ marginRight: '20px' }}>
        <Tooltip content="Add to library">
          <IconButton radius="full" color="green" onClick={() => { loCreate() }}>
            <PlusIcon />
          </IconButton>
        </Tooltip>
      </Section>
    </>
  )
}

export default Lo