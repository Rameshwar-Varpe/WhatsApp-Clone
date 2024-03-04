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
                color={"#667781"}
                margin={"28px 0 0 0"}
            >
                Download WhatsApp for Windows
            </Typography>

            <Typography
                color={"#667781"}
                margin={"18px 0 0 0"}
            >
                Make calls, share your screen and get a faster experience when you download the Windows app.
            </Typography>

            <Button
                sx={{
                    color: "#FFFFFF",
                    bgcolor: "#008069",
                    borderRadius: "20px"
                }}
            >Get the app</Button>

            <Box>
                <LockIcon />
            </Box>
            <Typography
                color={"#8696A0"}
                fontSize={"14px"}
            >
                Your personal messages are end-to-end encrypted
            </Typography>

        </Stack >
    )
};

export default DefaultHomePage;