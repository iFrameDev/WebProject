import { Box } from "@mui/material";

import FullWidthTabs from "../components/dashboard/dashboardMain";

const Dashboard= () => (

    <Box sx={{margin: 'auto', maxWidth:'1100px', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'flex-end'}}>

        
        <FullWidthTabs/>


    </Box>

);

export default Dashboard;