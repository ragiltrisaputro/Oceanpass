import { Checkbox, Card, List, ListItem, Typography } from "@material-tailwind/react";
import React, { useState } from 'react';

export default function Chexbok1() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <Card>
      <List>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-react"
            className="flex w-full cursor-pointer items-center px-5 py-2 hover:bg-gray-100 "
          >
            <Typography color="blue-gray" className="font-medium">
              Pejalan Kaki
            </Typography>
            <Checkbox
              id="vertical-list-react"
              ripple={false}
              checked={selectedOption === 'react'}
              onChange={() => handleOptionChange('react')}
              containerProps={{
                className: "p-0 ml-44", 
              }}
              inputProps={{
                className: "h-6 w-[50%] rounded-full",
              }}
            />
          </label>
        </ListItem>
      </List>
    </Card>
  );
}

