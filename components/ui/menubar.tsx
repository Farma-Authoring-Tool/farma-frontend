import { Box, Button, DropdownMenu, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { FaAlignJustify } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function SidebarLayout() {
  const navigate = useNavigate();
  const myLo = () => { navigate('/oa');};

  return (
    <>
    <Box p="5" style={{ backgroundColor: '#243038', margin:'-8px'}}>
      <Flex style={{ justifyContent: 'space-between'}}>
          <Grid columns="3" gap="9" width="auto">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="soft" color="cyan">
                  <FaAlignJustify />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item onSelect={myLo}>Meus OA's</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item onSelect={myLo}>Turmas</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Grid>

          <Grid columns="3" width="auto">
            <Heading as="h1" align='center' color='gray'> FARMA </Heading>
          </Grid>

          <Grid columns="3"  width="auto">
            <Text as='p' size="2" color='cyan' align={'right'}>Isabela Vitek</Text>
          </Grid>
        </Flex>
     </Box>
    </>
  );
}

export default SidebarLayout;
