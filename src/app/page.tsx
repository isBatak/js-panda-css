import { Link } from "@/components/core/Link";
import { Container, panda } from "../../panda/jsx";

export default function Home() {
  return (
    <Container display="flex" justifyContent="center" py="10">
      <Link
        href="/panda"
        variant="unstyled"
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxW="300px"
        fontFamily="sans"
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="3xl"
        shadow="md"
        transition="all 0.2s"
        _hover={{
          transform: 'translateY(-2px)',
          shadow: 'lg',
        }}
        className="group"
      >
        <panda.div
          display="block"
          fontSize="9xl"
          _groupHover={{
            animation: 'spin 1s infinite',
          }}
        >
          🐼
        </panda.div>
        <panda.h2 fontSize="2xl" mb="2">
          Panda CSS
        </panda.h2>
        <panda.div color="gray.900" p="4">
          Because why settle for just regular bear CSS when you can have a cute,
          powerful, and flexible framework like Panda CSS to make your web
          development roar with excitement!
        </panda.div>
      </Link>
    </Container>
  );
}
