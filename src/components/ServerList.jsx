import React from "react";
import Link from "next/link";

import Filter from "./Filter";
import Add from "./Add";

export default props => {
  return (
    <>
      <div className="flex flex-column flex-row-l justify-center">
        <Filter {...props} />
        <Add {...props} />
      </div>
      <ul className="list pl0 mt0 center">
        {props.servers.map(server => (
          <Link key={server.ip} as={"/server/" + server.ip} href={`/server?ip=${server.ip}`}>
            <a className="link black">
              <li className="flex hover-bg-light-red items-center justify-between lh-copy pa2 ph0-l bb b--black-10">
                <div className="pl2 overflow-hidden">
                  <span className="db black-70 measure truncate">{server.hn}</span>
                  <span className="db black-30 f6 measure truncate">{server.gm}</span>
                </div>

                <div className="pr2 tr dn di-ns flex-shrink-0">
                  <div className="black-70">
                    {server.pa ? <span>🔐</span> : null} <span>{server.ip}</span>
                  </div>
                  <div className="db black-30 f6 measure">
                    {server.pc}/{server.pm} playing now
                  </div>
                </div>
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </>
  );
};
