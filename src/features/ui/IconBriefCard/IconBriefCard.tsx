import { Avatar, ButtonBase, Stack, Typography } from "@mui/material";
import styles from "./IconBriefCard.module.css";
import { useTimeText } from "@/hooks/timeText";
import clsx from "clsx";

type IconBriefCardBadgeProps = {
  id: string;
  url?: string;
  image: string;
  tip?: string;
};

type IconBriefCardProps = {
  id: string;
  icon?: string;
  title: string;
  badges: IconBriefCardBadgeProps[];
  time?: Date;
};

export const IconBriefCard: React.FC<IconBriefCardProps> = ({
  icon,
  title,
  badges,
  time,
}) => {
  const { getTimeText } = useTimeText();
  const timeText = time !== undefined ? getTimeText(time) : null;

  return (
    <ButtonBase className={clsx(styles.body)}>
      <Stack direction="row" spacing={2} alignItems="center" useFlexGap>
        <Avatar sx={{ height: "2rem", width: "2rem" }} src={icon} />
        <Stack direction="column" spacing={0.5} useFlexGap>
          <Stack component="ul" direction="row" spacing={1} useFlexGap>
            {badges.map((badge) => (
              <li key={badge.id}>
                <Avatar
                  variant="square"
                  src={badge.image}
                  sx={{ height: "0.75rem", width: "0.7rem" }}
                />
              </li>
            ))}
          </Stack>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="caption">{timeText}</Typography>
        </Stack>
      </Stack>
    </ButtonBase>
  );
};
