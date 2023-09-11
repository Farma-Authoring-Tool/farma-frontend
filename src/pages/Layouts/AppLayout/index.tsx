import React from "react";
import { AppShell, Box, Burger, Divider, Flex, Header, Image, Navbar, Text, Title } from "@mantine/core";
import { ReactNode, useState } from "react";
import { FaCircleUser, FaBoxArchive, FaPeopleGroup } from "react-icons/fa6";
import farmaLogo from "../../../assets/farma.png";

import useStyles from "./styles";
// import i18n from "@/lang";

import { Link } from "react-router-dom";

interface AppLayoutProps {
    children: ReactNode;
    navbarLinkActive?:
        | "home"
        | "lo"
        | "lo-create"
        | "configurations";
}

export default function AppLayout({
    children,
    navbarLinkActive,
}: AppLayoutProps) {
    const { classes, cx } = useStyles();
    const [opened, setOpened] = useState(false);

    return (
        <AppShell padding="md" navbarOffsetBreakpoint="md"
            header={
                <Header style={{ backgroundColor: "#243038" }} height={65} px="md" pt={0} pb={0} >
                    <Flex justify="space-between" align="center" h="100%">
                        <Burger color="#45f50d" opened={opened} onClick={() => setOpened(!opened)} />
                        <Flex align="center" style={{ flex: 1, justifyContent: "center" }} >
                        <Title fz={28} className={classes.headerTitle} style={{ color: "white", fontFamily: "sans-serif" }} >
                            FARMA
                        </Title>
                        </Flex>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Image maw={50} src={farmaLogo} alt="logo" mr="lg" />
                        </Link>
                    </Flex>
                </Header>
            } 
            navbar={
                <Navbar hiddenBreakpoint="md" hidden={!opened} width={{ base: 300 }} height="auto" p="xs" >
                    <Navbar.Section grow>
                        <Text fz="md" ta="center">
                            <FaCircleUser />
                            Isabela Taques Vitek
                        </Text>
                        <Text fz="sm" c="lime" ta="center">Professor(a)</Text>

                        <Divider />

                        <Link to="/oa" style={{ textDecoration: "none" }}>
                            <Box
                                className={cx(classes.navbarLink, {
                                    [classes.navbarLinkActive]: navbarLinkActive === "lo",
                                })}
                            >
                                <FaBoxArchive />
                                Meus OA's
                            </Box>
                        </Link>

                        <Divider />

                        <Link to="/oa" style={{ textDecoration: "none" }} >
                            <Box
                                className={cx(classes.navbarLink, {
                                    [classes.navbarLinkActive]:
                                        navbarLinkActive === "lo",
                                })}
                            >
                                <FaPeopleGroup />
                                Turmas
                            </Box>
                        </Link>

                        <Divider />

                    </Navbar.Section>
                </Navbar>
            }
            styles={(theme) => ({
                main: {
                    backgroundColor: theme.colors.gray[0],
                },
            })}
        >
            {children}
        </AppShell>
    );
}
