import { Stack, CardMedia, Typography, Box, Button } from "@mui/material";
import videoChat from '../../DefaultImages/videoChat.png'
import { LockIcon } from "../../assets/icons";

function DefaultHomePage() {
    return (

        <Stack
            width={"inherit"}
            alignItems={"center"}
            justifyContent={"center"}
            bgcolor={"#F0F2F5"}
            padding={"28px 100px"}
            textAlign={"center"}
        >
            <CardMedia
                component={'img'}
                image={videoChat}
                sx={{
                    width: "320px",
                    height: "188px",
                }}
            />

            <Typography
                fontFamily={"inherit"}
                fontSize={"32px"}
                color={"#41525D"}
                margin={"28px 0 0 "}
                whiteSpace={"pre-line"}
            >
                Download WhatsApp for Windows
            </Typography>

            <Typography
                color={"#667781"}
                margin={"18px 0 0 0"}
                fontFamily={"inherit"}
                fontSize="14px"
            >
                Make calls, share your screen and get a faster experience when you download the Windows app.
            </Typography>

            <Button
                sx={{
                    color: "#FFFFFF",
                    bgcolor: "#008069",
                    borderRadius: "20px",
                    font:"14px",
                    padding:"6px 24px 6px 24px",
                    margin:'32px',
                    textSizeAdjust:"14px",
                    fontFamily:"inherit"
                }}
            >G<Typography textTransform={"lowercase"} fontFamily={"inherit"}>et the app</Typography></Button>
            <Stack
            direction={"row"}
            >
                <Box
                padding={"0 2px 0 0"}
                >
                    <LockIcon />
                </Box>
                <Typography
                    color={"#8696A0"}
                    fontSize={"14px"}
                    fontFamily={"inherit"}
                >
                    Your personal messages are end-to-end encrypted
                </Typography>
            </Stack>
        </Stack >
    )
};

export default DefaultHomePage;