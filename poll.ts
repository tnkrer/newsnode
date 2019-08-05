import { getDescendants } from "./comment";
import { getItem } from "./item";
import { getPost } from "./post";
import { HNPoll, HNPollOption } from "./types";

export async function getPoll(id: number): Promise<HNPoll> {
  const post = (await getPost(id)) as HNPoll;
  return {
    ...post,
  };
}
export async function getPollOption(id: number): Promise<HNPollOption> {
  const option = (await getItem(id)) as HNPollOption;
  return {
    ...option,
    /// Coerce types
    poll: Number(option.poll),
    getPoll: () => getPoll(Number(option.poll))
  };
}