import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedPlatformName?: string;
  onSelectPlatformName: (platform: string) => void;
}

const PlatformSelector = ({
  selectedPlatformName,
  onSelectPlatformName,
}: Props) => {
  const platforms = ["1", "2", "3"];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformName ? selectedPlatformName : "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem onClick={() => onSelectPlatformName(platform)}>
            {platform}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
