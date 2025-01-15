import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "flex-start", gap:'22rem' }}>
    <Link to="/" style={{ display: "flex", alignItems: "center"}}>
      <img src="/playicon.png" alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
