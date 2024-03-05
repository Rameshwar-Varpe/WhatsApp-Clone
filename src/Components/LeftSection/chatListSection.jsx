import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";

function ChatListSection(props) {
    return (
        <>

            {props.contacts.map((contact, index) => (
                <>
                    <Grid
                        key={index}
                        width="inherit"
                        // justifyContent="space-between"
                        // direction="row"
                        // alignItems="center"
                        // whiteSpace={"nowrap"}
                    >
                        <Box
                            direction="row"
                            alignItems="center"
                        >
                            <Box
                                padding="12px 15px 12px 13px"
                            >
                                <Avatar key={index} alt="profile picture" src={contact.profile} sx={{ height: "49px", width: "49px" }} />
                            </Box>

                            <Box
                                direction="column"
                                padding="0 15px 0 0"
                            >
                                <Typography
                                    fontSize="17px"
                                    color="#111B21"
                                    fontFamily={"inherit"}
                                >
                                    {contact.name}
                                </Typography>
                                <Typography
                                    fontFamily={"inherit"}
                                    fontSize="14px"
                                    color="#667781"
                                    sx={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        maxWidth: '100%'
                                    }}
                                >
                                    {props.chats.find((chat) => chat.mobile === contact.mobile)?.content || ""}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                        padding={"0 15px 0 0"}
                        >
                            <Typography
                                color={"#667781"}
                                fontFamily={"inherit"}
                                fontSize={"12px"}
                            >
                                {contact.lastChat}
                            </Typography>

                            <Typography>
                                { }
                            </Typography>
                        </Box>
                    </Grid>
                    <Divider variant="inset" />
                </>
            ))}
        </>
    );
}

export default ChatListSection;