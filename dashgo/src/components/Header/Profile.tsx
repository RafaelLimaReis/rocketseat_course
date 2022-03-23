import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
    return(
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Rafael Lima</Text>
                <Text color="gray.300" fontSize="small">rafaellimareis01@gmail.com</Text>
            </Box>
            <Avatar size="md" name="Rafael Lima" src="https://github.com/RafaelLimaReis.png"/>
        </Flex>
    );
}