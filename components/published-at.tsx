import { format } from "date-fns";
import { fr } from "date-fns/locale/fr";

export function PublishedAt({ dateString }: { dateString: string }) {
  return (
    <time dateTime={dateString}>
      <span className="italic mr-1">Publié le:</span>
      {format(new Date(dateString), "d LLLL yyyy", { locale: fr })}
    </time>
  );
}
