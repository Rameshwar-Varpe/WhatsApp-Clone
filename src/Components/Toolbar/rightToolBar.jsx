import { Avatar, Box, Stack, Typography } from "@mui/material";
import { ChatSearchIcon, DefaultMenuIcon, VideoCallDropDownIcon, VideoCallIcon } from "../../assets/icons";

function RightToolBar(props) {

    return (
        <>
            <Stack
                direction="row"
                // width="inherit"
                justifyContent="space-between"
                alignItems={"center"}
                bgcolor={"#f0f2f5"}
                borderLeft={"0.5px solid #d1d7db"}
            // padding={"10px 16px"}
            // borderRight={"1px"}
            // borderColor={"black"}
            >
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                >
                    <Box
                        sx={{
                            padding: "10px 16px"
                        }}
                    >
                        <Avatar alt="Contact Icon" src={props.selectedContact.profile} />
                    </Box>

                    <Box
                        textOverflow={"hidden"}
                    >
                        <Typography
                            color={"#111b21"}
                            fontSize={"#16px"}
                            fontFamily={"inherit"}
                        >
                            {props.selectedContact.name}
                        </Typography>
                        <Typography
                            color={"#667781"}
                            fontSize={"13px"}
                            fontFamily={"inherit"}
                        >
                            {props.selectedContact.lastActive}
                        </Typography>
                    </Box>

                </Stack>
                <Stack
                    direction={"row"}
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
            </Stack>
        </>
    )
}

export default RightToolBar;