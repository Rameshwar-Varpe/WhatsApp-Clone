import { Box, Stack } from "@mui/material";
import { DefaultUserIcon, CommunitiesIcon, StatusIcon, ChannelsIcon, NewChatIcon, MenuIcon } from "../../assets/icons";

function LeftToolBar() {

    return (
        <>
            <Stack
                direction={"row"}
                justifyContent="space-between"
                bgcolor={"#f0f2f5"}
                width="100%"
                padding={"10px 16px"}
            >
                <Stack
                    justifyContent={"flex-start"}
                >
                    <DefaultUserIcon heightt={40} widthh={40} colorr1={"#dfe5e7"} colorr2={"#ffffff"} />
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={"8.2px"}
                >
                    <Box
                        padding={"6px 8px"}
                    >
                        <CommunitiesIcon heightt={24} widthh={24} />
                    </Box>
                    <Box
                        padding={"6px 8px"}
                    >
                        <StatusIcon heightt={24} widthh={24} />
                    </Box>

                    <Box
                        padding={"6px 8px"}
                    >
                        <ChannelsIcon heightt={24} widthh={24} />
                    </Box>

                    <Box
                        padding={"6px 8px"}                    >
                        <NewChatIcon heightt={24} widthh={24} />
                    </Box>

                    <Box
                        padding={"6px 8px"}
                    >
                        <MenuIcon heightt={24} widthh={24} />
                    </Box>
                </Stack>
            </Stack>
        </>
    )
}

export default LeftToolBar;