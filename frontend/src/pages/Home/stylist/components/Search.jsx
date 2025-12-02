import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="mt-10">
      <form action="" className="flex items-center gap-2">
        <InputGroup className="p-6 px-3 pl-2 rounded-2xl">
          <InputGroupInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>

        <Button type="submit" className="p-6 rounded-2xl">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;

// TODO : Made  for User dashboard UI move it there
