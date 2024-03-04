import { Box, Stack } from "@mui/material";
import { ChatSearchIcon, DefaultMenuIcon, VideoCallDropDownIcon, VideoCallIcon } from "../../assets/icons";

function RightToolBar() {

    return (
        <>
            <Stack
                direction="row"
                width="160%"
                justifyContent="flex-end"
                bgcolor={"#f0f2f5"}
                padding={"10px 16px"}
                marginLeft="1px"
            >
                <Stack
                    direction="row"
                    padding="0 14px 0 0"
                    alignItems="center"
                >
                    <Box>
                        <VideoCallIcon />
                    </Box>
                    <Box
                    padding="0 0 0 8px"
                    >
                        <VideoCallDropDownIcon />
                    </Box>
                </Stack>
                <Box
                    padding={"6px 14px"}
                >
                    <ChatSearchIcon />
                </Box>
                <Box
                    padding={"6px 14px"}
                >
                    <DefaultMenuIcon />
                </Box>
            </Stack>
        </>
    )
}

export default RightToolBar;