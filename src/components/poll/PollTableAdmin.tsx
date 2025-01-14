import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { Dispatch } from "react";
import { Table } from "react-bootstrap";
import { CheckCircleFill, CircleFill, PersonFill } from "react-bootstrap-icons";
import {
  isTimeIfNeedBe,
  isTimePresentInPollTimes,
  slotCheckClassName,
} from "../../helpers";
import { PollFromDB, Time, Vote } from "../../models/poll";
import MarkFinalTime from "./MarkFinalTime";
import PollDateTime from "./PollDateTime";

dayjs.extend(localizedFormat);

const PollTableAdmin = (props: {
  pollFromDB: PollFromDB;
  sortedTimes: Time[];
  setFinalTime: Dispatch<Time | undefined>;
}): JSX.Element => {
  const { pollFromDB, sortedTimes, setFinalTime } = props;

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th className="poll-participant-cell"> </th>
            {sortedTimes.map((time, i) => (
              <th key={JSON.stringify(time)} className="poll-slot-time">
                <PollDateTime
                  time={time}
                  type="admin"
                  index={i}
                  times={sortedTimes}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pollFromDB.open &&
            (!pollFromDB.type || pollFromDB.type === "group") && (
              <MarkFinalTime times={sortedTimes} setFinalTime={setFinalTime} />
            )}
          <tr>
            <td className="poll-table-total-participants">
              {pollFromDB.type === "group"
                ? pollFromDB.votes?.length + 1
                : pollFromDB.votes?.length}
              &nbsp; &nbsp;
              {pollFromDB.type === "oneonone" && pollFromDB.votes?.length === 1
                ? "PARTICIPANT"
                : "PARTICIPANTS"}
            </td>
            {sortedTimes.map((time: Time) => (
              <td key={JSON.stringify(time)} className="poll-slot-total-votes">
                {pollFromDB.votes?.filter((vote: Vote) =>
                  isTimePresentInPollTimes(time, vote.times)
                ).length !== 0 && (
                  <span>
                    <PersonFill className="poll-total-votes-icon" />
                    {pollFromDB.type === "group"
                      ? pollFromDB.votes?.filter((vote: Vote) =>
                          isTimePresentInPollTimes(time, vote.times)
                        ).length + 1
                      : pollFromDB.votes?.filter((vote: Vote) =>
                          isTimePresentInPollTimes(time, vote.times)
                        ).length}
                  </span>
                )}
              </td>
            ))}
          </tr>
          {pollFromDB.votes?.map((vote: Vote, idx: number) => (
            <tr key={`${idx}-${vote.name}`}>
              <td className="poll-table-participants">{vote.name}</td>
              {sortedTimes.map((time: Time) => (
                <td
                  key={JSON.stringify(time)}
                  className={slotCheckClassName(time, vote.times)}
                >
                  {isTimeIfNeedBe(time, vote.times) ? (
                    <CircleFill className="poll-slot-check" />
                  ) : (
                    <CheckCircleFill className="poll-slot-check" />
                  )}
                </td>
              ))}
            </tr>
          ))}
          {pollFromDB.type === "group" && (
            <tr>
              <td className="poll-table-participants">You</td>
              {sortedTimes.map((time: Time) => (
                <td key={JSON.stringify(time)} className="poll-slot-checked">
                  <CheckCircleFill className="poll-slot-check" />
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default PollTableAdmin;
