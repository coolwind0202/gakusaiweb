import { IconBriefCard } from "@/features/ui/IconBriefCard";
import { RecentSearchQueryEntity } from "../RecentSearchQueryEntity";

type RecentSearchQueryCardProps = {
  entity: RecentSearchQueryEntity;
};

export const RecentSearchQueryCard: React.FC<RecentSearchQueryCardProps> = ({
  entity,
}) => {
  return (
    <IconBriefCard
      title={entity.word}
      icon={entity.icon}
      id={entity.id}
      time={entity.time}
      badges={entity.badges.map(({ id, badge }) => ({
        id,
        image: badge.image,
        tip: badge.name,
      }))}
    />
  );
};
