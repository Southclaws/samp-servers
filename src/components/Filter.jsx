import React, { useState } from "react";

const formItemStyle = "pa1 ph2 flex flex-column flex-row-ns tl-ns tc";

export default ({ query }) => {
  const [showFull, setShowFull] = useState(query.showFull);
  const [showEmpty, setShowEmpty] = useState(query.showEmpty);
  const [reverse, setReverse] = useState(query.reverse);

  return (
    <>
      <form action="" className="form" className="flex flex-wrap items-center justify-center pa2 f7">
        <span className={formItemStyle}>
          <label className="pr2" htmlFor="showFull">
            Full Servers:
          </label>
          <input
            type="checkbox"
            name="showFull"
            id="showFull"
            checked={showFull}
            onChange={e => {
              setShowFull(e.target.checked);
            }}
          />
        </span>

        <span className={formItemStyle}>
          <label className="pr2" htmlFor="showEmpty">
            Empty Servers:
          </label>
          <input
            type="checkbox"
            name="showEmpty"
            id="showEmpty"
            checked={showEmpty}
            onChange={e => setShowEmpty(e.target.checked)}
          />
        </span>

        <span className={formItemStyle}>
          <label className="pr2" htmlFor="reverse">
            Reverse:
          </label>
          <input
            type="checkbox"
            name="reverse"
            id="reverse"
            checked={reverse}
            onChange={e => setReverse(e.target.checked)}
          />
        </span>

        {/* Note: The API currently does not provide any more sort orders. */}
        {/* <span>
          <label className="pr2" htmlFor="by">
            Sort:
          </label>
          <select name="by" id="by" value={query.by}>
            <option value="player">Players</option>
          </select>
        </span> */}

        <span className={formItemStyle}>
          <button
            className={[
              "ph3",
              "f6",
              "pointer",
              "no-underline",
              "black",
              "bg-white",
              "hover-bg-light-red",
              "hover-white",
              "inline-flex",
              "items-center",
              "pa2",
              "ba",
              "border-box",
              "mr4"
            ].join(" ")}
            type="submit"
          >
            Apply
          </button>
        </span>
      </form>
    </>
  );
};
