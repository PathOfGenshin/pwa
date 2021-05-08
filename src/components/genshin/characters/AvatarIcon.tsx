import clsx from "clsx"

import { avatarIcon, rarityBackground } from "@/assets/static"
import styles from "@/styles/image.module.scss"

import { AvatarIconProps } from "./icon"

interface FocusedProps {
  isFocused: boolean
}

const AvatarIcon: React.FC<AvatarIconProps & FocusedProps> = ({
  iconName,
  charName,
  rarity,
  onClick,
  "data-id": dataId,
  "data-name": dataName,
  "data-index": dataIndex,
  isFocused,
  disabled,
}: AvatarIconProps & FocusedProps) => {
  return (
    <div className={clsx("block w-24 2xl:w-32", disabled ? "opacity-30" : "")}>
      <button
        data-id={dataId}
        data-name={dataName}
        data-index={dataIndex}
        className={clsx(
          "block relative w-24 rounded-md shadow-md transition duration-75 transform 2xl:w-32 focus:outline-none focus:ring focus:ring-blue-400 dark:focus:ring-blue-50 focus:scale-105",
          isFocused ? "ring ring-blue-400 dark:ring-blue-50 scale-105" : "",
          !disabled ? "hover:scale-105" : "",
        )}
        onClick={onClick}
        disabled={disabled}
      >
        <img
          className={clsx(
            "absolute w-full rounded-md opacity-80 pointer-events-none select-none",
            styles.crisp,
          )}
          src={rarityBackground(rarity)}
          alt={`${rarity} Star`}
        />
        <div className="flex relative flex-col">
          <div className="relative w-24 h-24 2xl:w-32 2xl:h-32">
            <img
              className={clsx(
                "absolute w-24 rounded-md pointer-events-none select-none 2xl:w-32",
                styles.crisp,
              )}
              src={avatarIcon(iconName)}
              alt={charName}
            />
          </div>
          <div className="h-6 text-sm leading-6 tracking-tight rounded-b-md font-genshin bg-g-paper text-g-paper-0 2xl:h-7.5 2xl:text-lg 2xl:leading-7.5">
            {charName}
          </div>
        </div>
      </button>
    </div>
  )
}

export default AvatarIcon
