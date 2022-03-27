import { Table } from "react-bootstrap";
import { Check2, Check2Circle } from "react-bootstrap-icons";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import PollDateTime from "./PollDateTime";
import { Time, PollFromDB, Vote } from "../../models/poll";
import {
  slotCheckClassName,
  isTimeIfNeedBe,
  isTimePresentInPollTimes,
} from "../../helpers";

dayjs.extend(localizedFormat);

const PollTableVotes = (props: {
  pollFromDB: PollFromDB;
  sortedTimes: Time[];
}): JSX.Element => {
  const { pollFromDB, sortedTimes } = props;
  return (
    <div className="poll-info-div">
      <Table responsive className="poll-table">
        <thead>
          <tr className="poll-table-top-row">
            <th className="participant-cell"> </th>
            {sortedTimes.map((time) => (
              <th
                key={time.start}
                className={
                  time.start === pollFromDB.finalTime?.start &&
                  time.end === pollFromDB.finalTime?.end
                    ? "slot-time slot-final-time"
                    : "slot-time"
                }
              >
                <PollDateTime time={time} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="poll-table-total-participants">
              {pollFromDB.votes?.length} PARTICIPANTS
            </td>
            {sortedTimes.map((time: Time) => (
              <td key={time.start} className="slot-total-votes">
                <span className="total-yes-votes">
                  <Check2 className="slot-check" />
                  {
                    pollFromDB.votes?.filter((vote: Vote) =>
                      isTimePresentInPollTimes(
                        time,
                        vote.times.filter(
                          (timeFromVote: Time) => !timeFromVote.ifNeedBe
                        )
                      )
                    ).length
                  }
                </span>
                <span className="total-if-need-be-votes">
                  <Check2Circle className="slot-check" />
                  {
                    pollFromDB.votes?.filter((vote: Vote) =>
                      isTimePresentInPollTimes(
                        time,
                        vote.times.filter(
                          (timeFromVote: Time) => timeFromVote.ifNeedBe
                        )
                      )
                    ).length
                  }
                </span>
              </td>
            ))}
          </tr>
          {pollFromDB.votes?.map((vote: Vote, idx: number) => (
            <tr key={`${idx}-${vote.username}`}>
              <td className="poll-table-participants">{vote.username}</td>
              {sortedTimes.map((time: Time) => (
                <td
                  key={time.start}
                  className={slotCheckClassName(time, vote.times)}
                >
                  {isTimeIfNeedBe(time, vote.times) ? (
                    <Check2Circle className="slot-check" />
                  ) : (
                    <Check2 className="slot-check" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PollTableVotes;