<div align="center">
  <a href="https://www.kukkee.com/">
    <img
      src="./public/favicon.svg"
      alt="Kukkee Logo"
      height="64"
    />
  </a>
  <p>
    <b>
      Kukkee — free and open source meeting poll tool
    </b>
  </p>
  <p>

[![License](https://img.shields.io/github/license/Kukkee/Kukkee?color=%23000000&style=for-the-badge)](https://github.com/Kukkee/Kukkee/blob/main/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/Kukkee/Kukkee?color=%23000000&&style=for-the-badge)](https://github.com/Kukkee/Kukkee/graphs/contributors)
[![Create a poll](https://shields.io/badge/style-Now-black?&style=for-the-badge&label=Create%20a%20poll)](https://kukkee.com/)

  </p>
  <br/>
</div>

Kukkee is a fast, free and open source meeting poll tool. Quickly create a meeting poll by choosing the time slots based on your availability. Copy and share the poll link with the participants to let them mark their availability. Find the most popular times and see who's free with "yes" votes - or who can be - with "if need be" votes, and book the meeting! Create a poll now at [Kukkee.com](https://kukkee.com/)!

## Motivation

After my GSoC '20 at LiberTEM, I wanted to have a video call with my mentors. They said yes, and since the next step was to find a suitable and common time, one of them sent me a link to a meeting poll created using a proprietary online service. It had surprisingly bad UX and was covered with advertisements. I searched for good, free and open source meeting poll tools, but didn't find any. So I decided to fix that problem.

## Get in touch

If you have suggestions for how Kukkee could be improved, please add your thoughts on a relevant discussion [here](https://github.com/Kukkee/Kukkee/discussions/) or start a new discussion. If you have any questions, I'd love to hear them too! If you want to report an issue, check if the issue is already opened [here](https://github.com/AnandBaburajan/Kukkee/issues) otherwise open a new one.

## Self-hosting

### Deployment

Kukkee is built with Next.js, hence you would need to deploy Kukkee to a platform that supports Next.js (Vercel, AWS EC2, DigitalOcean Droplet, etc).

#### Vercel

In case you don't have a platform already, you can get started with Vercel for free.

1. Fork this repo to your own GitHub account and then clone it.
2. Go to https://vercel.com/dashboard
3. Create a new project
4. Import your forked git repository
5. Set the environment variables (according to the instructions in .env.example)
6. Deploy

### Database

Kukkee uses MongoDB, hence you would need a MongoDB server hosted somewhere.

#### MongoDB Atlas

In case you don't have a hosted MongoDB server, you can [get started with MongoDB Atlas](https://www.mongodb.com/basics/mongodb-atlas-tutorial) for free. If you're planning to use Vercel to deploy your own Kukkee, you must add all IP addresses (0.0.0.0/0) to the IP access list of your Atlas cluster since it is not possible to determine the IP addresses of Vercel deployments.

## Contributing

### Development

First, make sure you have [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/docs/manual/installation/#mongodb-installation-tutorials) installed. Then, to develop locally:

1. Fork this repo to your own GitHub account and then clone it.

   ```sh
   git clone https://github.com/<your-username>/Kukkee.git
   ```

2. Go to the project folder

   ```sh
   cd Kukkee
   ```

3. Create a new branch:

   ```sh
   git checkout -b MY_BRANCH_NAME
   ```

4. Install the dependencies with:

   ```sh
   npm i
   ```

5. Copy `.env.example` to `.env`

   ```sh
   cp .env.example .env
   ```

6. Set the env variables according to the instructions in the .env file

7. Start developing and watch for code changes:

   ```sh
   npm run dev
   ```

8. Please make sure that you can make a full production build before opening a PR. You can build the project with:

   ```sh
   npm run build
   ```

## FOSS Hack 3.0

Kukkee took part in FOSS Hack 3.0. Here's the summary:

1. What was the stage of the project (before FOSS Hack 3.0)?

   > Kukkee did its job well as a fast, free and open source meeting poll tool. It has been used to schedule 2K+ meetings and interestingly enough, it was used in FOSS Hack 3.0 by a volunteer to schedule talk review sessions. But it's UI and UX were bad and there were many possible usability improvements which could have been made.

2. What stage is it in now (after FOSS Hack 3.0)?

   > Now the UI/UX is much better and I feel like now it actually is a joy to use.

3. How did you get there?

   > I explored a lot about the scheduling industry, talk to competitors, looked into the feedback I had gotten from users, and made a plan on what to improve. I switched to a different and modern calendar component called react-big-calendar, and spent a lot of time styling it. Now users can select timeslots properly on mobile -- earlier only 1 hour slots could be selected. Users can also have timeslots overlapping with each other. The voter's page has been revamped to look much cleaner and distraction-free. The recent polls page was improved by reducing whitespace and adding open/delete buttons. I improved some other minor things like using a better toast for error/success messages and asking for confirmation before deletion.

4. What is working/not working?

   > Every feature available in Kukkee right now works well and there are no issues, but if you find any, please open an issue!

## Acknowledgements

Special thanks to these amazing projects which help power Kukkee:

- React-big-calendar
- React
- Next.js
- Day.js
- Bootstrap
- MongoDB
- Mongoose
- Inter
- Cal Sans

## License

Kukkee is distributed under the [MIT License](https://github.com/AnandBaburajan/Kukkee/blob/main/LICENSE).
