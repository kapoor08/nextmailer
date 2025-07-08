import Form from "@/components/Form";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <main className="!w-full overflow-hidden">
      <div className="flex flex-col min-h-screen">
        <Box
          className="relative w-full top-0 flex-grow"
          sx={{
            background: "var(--nav-items-color)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Form />
        </Box>
      </div>
    </main>
  );
}
