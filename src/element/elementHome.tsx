import Box from '../components/box'
import DynamicPage from "./dynamic/dynamicPage";
import HMeta from "../components/headerMeta";
import ResElementTest from "./res/resElementTest";

export default function ElementHome ({children}:any) {
  return (
    <Box>
      Element Home Index Page
      <HMeta pageTitle={"aa"}/>
      {children}
        <DynamicPage />
        <ResElementTest >
            aa
        </ResElementTest>
    </Box>
  )
}
