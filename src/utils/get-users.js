import { faker } from "@faker-js/faker";

const getIssues = (amount = 10) => {
  const issues = [];
  for (let idx = 0; idx < amount; idx++) {
    const newIssue = {
      id: faker.random.numeric(5),
      title: faker.random.words(4),
      createdDate: faker.date.soon(),
      isFinished: faker.datatype.boolean(),
      user: getUser(),
      comments: +faker.random.numeric(2),
      tags: [
        {
          type: "resolution",
          label: faker.random.words(2),
        },
        {
          type: "status",
          label: faker.random.words(2),
        },
        {
          type: "type",
          label: faker.random.words(2),
        },
      ],
    };
    issues.push(newIssue);
  }
  return issues;
};

const getUser = () => {
  return {
    id: faker.random.numeric(),
    username: faker.name.findName(),
    avatarURL: faker.internet.avatar(),
    address: {
      city: faker.address.city(),
      state: faker.address.state(),
    },
  };
};

export default getIssues;
