"use client";

import { analytics } from "../utils/analytics";
import { BarChart, Card } from "@tremor/react";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

interface AnalyticsDashboardProps {
  avgVisitorsPerDay: string;
  amtVisitorsToday: number;
  timeseriesPageviews: Awaited<ReturnType<typeof analytics.retrieveDays>>;
  topCountries: [string, number][];
  avgSocialMediaClicksPerDay: string;
  amtSocialMediaClicksToday: number;
  socialMediaMap: [string, number][];
}

const Badge = ({ percentage }: { percentage: number }) => {
  const isPositive = percentage > 0;
  const isNeutral = percentage === 0;
  const isNegative = percentage < 0;

  if (Number.isNaN(percentage)) return null;

  const positiveClassname = "bg-green-900/25 text-green-400 ring-green-400/25";
  const neutralClassname = "bg-zinc-900/25 text-zinc-400 ring-zinc-400/25";
  const negativeClassname = "bg-red-900/25 text-red-400 ring-red-400/25";

  return (
    <span
      className={`inline-flex gap-1 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
        isPositive
          ? positiveClassname
          : isNeutral
          ? neutralClassname
          : negativeClassname
      }`}
    >
      {isPositive ? <ArrowUpRight className="w-3 h-3" /> : null}
      {isNeutral ? <ArrowRight className="w-3 h-3" /> : null}
      {isNegative ? <ArrowDownRight className="w-3 h-3" /> : null}
      {percentage.toFixed(0)}%
    </span>
  );
};

const AnalyticsDashboard = ({
  avgVisitorsPerDay,
  amtVisitorsToday,
  timeseriesPageviews,
  topCountries,
  avgSocialMediaClicksPerDay,
  amtSocialMediaClicksToday,
  socialMediaMap,
}: AnalyticsDashboardProps) => {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="grid w-full grid-cols-1 gap-6 mx-auto sm:grid-cols-2">
        <Card className="w-full">
          <p className="text-tremor-default text-dark-tremor-content">
            Avg. visitors/day
          </p>
          <p className="text-3xl font-semibold text-dark-tremor-content-strong">
            {avgVisitorsPerDay}
          </p>
        </Card>
        <Card className="w-full">
          <p className="flex gap-2.5 items-center text-tremor-default text-dark-tremor-content">
            Visitors today
            <Badge
              percentage={
                (amtVisitorsToday / Number(avgVisitorsPerDay) - 1) * 100
              }
            />
          </p>
          <p className="text-3xl font-semibold text-dark-tremor-content-strong">
            {amtVisitorsToday}
          </p>
        </Card>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 mx-auto sm:grid-cols-2">
        <Card className="w-full">
          <p className="text-tremor-default text-dark-tremor-content">
            Avg. social media clicks/day
          </p>
          <p className="text-3xl font-semibold text-dark-tremor-content-strong">
            {avgSocialMediaClicksPerDay}
          </p>
        </Card>
        <Card className="w-full">
          <p className="flex gap-2.5 items-center text-tremor-default text-dark-tremor-content">
            Social Media Today
            <Badge
              percentage={
                (amtSocialMediaClicksToday /
                  Number(avgSocialMediaClicksPerDay) -
                  1) *
                100
              }
            />
          </p>
          <p className="text-3xl font-semibold text-dark-tremor-content-strong">
            {amtSocialMediaClicksToday}
          </p>
        </Card>
      </div>

      <Card className="flex flex-col grid-cols-4 gap-6 sm:grid">
        <h2 className="w-full text-xl font-semibold text-center text-dark-tremor-content-strong sm:left-left">
          This weeks top visitors:
        </h2>
        <div className="flex flex-wrap items-center justify-between col-span-3 gap-8">
          {topCountries?.map(([countryCode, number]) => {
            return (
              <div
                key={countryCode}
                className="flex items-center gap-3 text-dark-tremor-content-strong"
              >
                <p className=" text-tremor-content">
                  {countryCode}
                </p>
                <ReactCountryFlag
                  className="text-5xl sm:text-3xl"
                  svg
                  countryCode={countryCode}
                />

                <p className="text-tremor-content sm:text-dark-tremor-content-strong">
                  {number}
                </p>
              </div>
            );
          })}
        </div>
      </Card>
      <Card className="flex flex-col grid-cols-4 gap-6 sm:grid">
        <h2 className="w-full text-xl font-semibold text-center text-dark-tremor-content-strong sm:left-left">
          This weeks top social media clicks:
        </h2>
        <div className="flex flex-wrap items-center justify-between col-span-3 gap-8">
          {socialMediaMap?.map(([socialMedia, number]) => {
            return (
              <div
                key={socialMedia}
                className="flex items-center gap-3 text-dark-tremor-content-strong"
              >
                <p className=" text-tremor-content">
                  {socialMedia}
                </p>
                {/* TODO: ADD icon */}
                <p className="text-tremor-content sm:text-dark-tremor-content-strong">
                  {number}
                </p>
              </div>
            );
          })}
        </div>
      </Card>

      <Card>
        {timeseriesPageviews ? (
          <BarChart
            allowDecimals={false}
            showAnimation
            data={timeseriesPageviews.map((day) => ({
              name: day.date,
              Visitors: day.events.reduce((acc, curr) => {
                return acc + Object.values(curr)[0];
              }, 0),
            }))}
            categories={["Visitors"]}
            index="name"
          />
        ) : null}
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
