import { Box, Stack } from "@mui/material";
import { DefaultUserIcon, CommunitiesIcon, StatusIcon, ChannelsIcon, NewChatIcon, MenuIcon } from "../../assets/icons";

function LeftToolBar() {

    return (
        <>
            <Stack
                direction={"row"}
                justifyContent="space-between"
                bgcolor={"#f0f2f5"}
                width="inherit"
                padding={"10px 16px"}
            >
                <DefaultUserIcon heightt={40} widthh={40} colorr1={"#dfe5e7"} colorr2={"#ffffff"} />
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={3}
                >
                    <Box >
                        <CommunitiesIcon heightt={24} widthh={24} />
                    </Box>
                    <Box>
                        <StatusIcon heightt={24} widthh={24} />
                    </Box>
                    <Box>
                        <ChannelsIcon heightt={24} widthh={24} />
                    </Box>
                    <Box>
                        <NewChatIcon heightt={24} widthh={24} />
                    </Box>
                    <Box>
                        <MenuIcon heightt={24} widthh={24} />
                    </Box>
                </Stack>
            </Stack>
        </>
    )
}

export default LeftToolBar;