import Background from "../components/background";
import { Box } from '../components/box';
import Image from 'next/image'

export default function Index () {
    const text1 = 'eeee aaa';
    const logo = Image;
    const IndexBox = ({children}) => {
        return (
            <Box w={500} h={500} display='inline-block' jc='start' ai='start' p={40} bgColor='#fff' m='40px 20px 40px 20px'>
                {children}
            </Box>
        )
    };
    return(
        <div>
			<Background />
            <Box h={'auto'} display='flex' jc='center' ai='center' p={40} bgColor='#000'>
                <IndexBox>
                    <h1>About <br/> VARIUS</h1>
                    <Box display='inline-block' textSize={22}>
                        <p>VARIUS is development of Metaverse and Web3 library and Platform</p>
                        <Box w={400} h={400} bgColor={'#fff'} display='flex' jc='center' ai='center'>仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮仮</Box>
                        <Image src="/image_4.png" alt="me" width="64" height="64" />
                    </Box>
                </IndexBox>
                <IndexBox>
                    <h1>About <br/> V</h1>
                    <Box display='inline-block' textSize={22}>
                        <p>V is most freedom metaverse platform on the real and virtul world.</p>
                    </Box>
                </IndexBox>
            </Box>
        </div>
    )
}
