import { Stack } from "@mui/material";
import LeftToolBar from "./Toolbar/leftToolBar.jsx";
import SearchBar from "./LeftSection/searchBar.jsx"
import ChatListSection from "./LeftSection/chatListSection.jsx";
import { useState } from "react";
function Dashboard() {
    const [contacts, setContacts] = useState(
        [
            { id: '1', name: 'Pratiksha Shinde', mobile: '9324102653', lastChat: 'Today', profile: 'https://pps.whatsapp.net/v/t61.24694-24/328739635_892854521966044_2603007389348596863_n.jpg?ccb=11-4&oh=01_AdTP_yNtyUJRK2eJpWNN22n7hXZX7EzQWC0OySG2mkeFaA&oe=65F1286E&_nc_sid=e6ed6c&_nc_cat=107' },
            { id: '2', name: 'Ashutosh Verulkar', mobile: '7218724953', profile: '', lastChat: "yesterday" },
            { id: '3', name: 'Shubham Thorat', mobile: '9579599178', lastChat: 'Saturday', profile: 'https://pps.whatsapp.net/v/t61.24694-24/377989196_820983789709675_4695400949932798501_n.jpg?ccb=11-4&oh=01_AdTJwnmXBw7UVrK6E2rSIZQE-kUDTWNcmhq-E7M5A6hJ3Q&oe=65F12D9E&_nc_sid=e6ed6c&_nc_cat=102' },
            { id: '4', name: 'Omkar', mobile: '7843039075', lastChat: 'Friday', profile: 'https://media-maa2-2.cdn.whatsapp.net/v/t61.24694-24/427231924_1792579834588284_4288521279617501760_n.jpg?ccb=11-4&oh=01_AdRrkkDT42ArzoW9Qxx7KJFPYs90HTtyjxrLn1IsmFPZYA&oe=65F13E79&_nc_sid=e6ed6c&_nc_cat=103' },
            { id: '5', name: 'Rutik Dube', mobile: '9422063173', lastChat: '14/02/20024', profile: 'https://media-maa2-2.cdn.whatsapp.net/v/t61.24694-24/408990907_1079189529801932_1305010244935482638_n.jpg?ccb=11-4&oh=01_AdTo__VB9CGM_seEk-q7UFziRMtVtT8TH_lHJ8vjhv4fEA&oe=65F131DD&_nc_sid=e6ed6c&_nc_cat=108' },
            // { id: '6', name: 'Rohit Navale', mobile: '8483005153', lastChat: '25/01/2002', profile: 'https://pps.whatsapp.net/v/t61.24694-24/424425344_776118247701858_2485486084677294843_n.jpg?ccb=11-4&oh=01_AdQiyq1jFNoifNt44JJ4efBr8QAwdL3U7goVN2WOKtUzWA&oe=65F12D64&_nc_sid=e6ed6c&_nc_cat=100' },
            // { id: '7', name: 'Sachin Dethe', mobile: '9322755952', lastChat: '01/01/2024', profile: 'https://media-maa2-2.cdn.whatsapp.net/v/t61.24694-24/422251560_2582099215283560_1271321001017426075_n.jpg?ccb=11-4&oh=01_AdS-xOWa_n5KK9RQ-IkTm8blebMmad3IvGQpzVRPENGwHg&oe=65F1553B&_nc_sid=e6ed6c&_nc_cat=103' }
        ]
    )
    // const contacts = [
    //     {id:'1', name:'Pratiksha Shinde', mobile:'+91 93241 02653', lastChat:'Today', profile:'https://pps.whatsapp.net/v/t61.24694-24/328739635_892854521966044_2603007389348596863_n.jpg?ccb=11-4&oh=01_AdTP_yNtyUJRK2eJpWNN22n7hXZX7EzQWC0OySG2mkeFaA&oe=65F1286E&_nc_sid=e6ed6c&_nc_cat=107'},
    //     {id:'2',name:'Ashutosh Verulkar', mobile:'+91 72187 24953', profile:'', lastChat:"yesterday"},
    //     {id:'3',name:'Shubham Thorat', mobile:'+91 95795 99178',lastChat:'Saturday', profile:'https://pps.whatsapp.net/v/t61.24694-24/377989196_820983789709675_4695400949932798501_n.jpg?ccb=11-4&oh=01_AdTJwnmXBw7UVrK6E2rSIZQE-kUDTWNcmhq-E7M5A6hJ3Q&oe=65F12D9E&_nc_sid=e6ed6c&_nc_cat=102'},
    //     {id:'4',name:'Omkar', mobile:'+91 78430 39075', lastChat:'Friday', profile:'https://media-maa2-2.cdn.whatsapp.net/v/t61.24694-24/427231924_1792579834588284_4288521279617501760_n.jpg?ccb=11-4&oh=01_AdRrkkDT42ArzoW9Qxx7KJFPYs90HTtyjxrLn1IsmFPZYA&oe=65F13E79&_nc_sid=e6ed6c&_nc_cat=103'},
    //     {id:'5',name:'Rutik Dube', mobile:'+91 94220 63173', lastChat:'14/02/20024', profile:'https://media-maa2-2.cdn.whatsapp.net/v/t61.24694-24/408990907_1079189529801932_1305010244935482638_n.jpg?ccb=11-4&oh=01_AdTo__VB9CGM_seEk-q7UFziRMtVtT8TH_lHJ8vjhv4fEA&oe=65F131DD&_nc_sid=e6ed6c&_nc_cat=108'},
    //     {id:'6',name:'Rohit Navale', mobile:'+91 84830 05153', lastChat:'25/01/2002', profile:'https://pps.whatsapp.net/v/t61.24694-24/424425344_776118247701858_2485486084677294843_n.jpg?ccb=11-4&oh=01_AdQiyq1jFNoifNt44JJ4efBr8QAwdL3U7goVN2WOKtUzWA&oe=65F12D64&_nc_sid=e6ed6c&_nc_cat=100'},
    //     {id:'7',name:'Sachin Dethe', mobile:'+91 93227 55952', lastChat:'01/01/2024',profile:'https://media-maa2-2.cdn.whatsapp.net/v/t61.24694-24/422251560_2582099215283560_1271321001017426075_n.jpg?ccb=11-4&oh=01_AdS-xOWa_n5KK9RQ-IkTm8blebMmad3IvGQpzVRPENGwHg&oe=65F1553B&_nc_sid=e6ed6c&_nc_cat=103'}
    // ];  

    const [chats, setChats] = useState(
        [
            {
                id: '1',
                content: "Hiii!!! Whats going on aa😃",
                time: '13:24',
                date: '02/03/2024',
                mobile: '9324102653',
                deliveredStatus: 'true',
                readStatus: 'true'
            },
            {
                id: '2',
                content: "Good morning...",
                time: '13:24',
                date: '02/03/2024',
                mobile: '7218724953',
                deliveredStatus: 'true',
                readStatus: 'true'
            }
        ]
    )
    // const chats = [
    //     {
    //         id: '1',
    //         content: "Hiii...",
    //         time: '13:24',
    //         date: '02/03/2024',
    //         mobile: '+91 9673524106',
    //         deliveredStatus: 'true',
    //         readStatus: 'true'
    //     }
    // ]

    return (
        <>
            <Stack>
                <Stack
                    direction="column"
                    alignItems="flex-start"
                >
                    <LeftToolBar />
                    <SearchBar />
                    <ChatListSection
                        contacts={contacts}
                        setContacts={setContacts}
                        chats={chats}
                        setChats={setChats}
                    />
                </Stack>
            </Stack>
        </>
    )
}

export default Dashboard;