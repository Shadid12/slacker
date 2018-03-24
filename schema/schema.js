export default `
  type Team {
    owner: User!
    members: [User!]!
    channels: [Channel!]!
  }
  type Channel {
    id: Int!
    name: String!
    public: Boolean!
    messages: [Message!]!
    users: [User!]!
  }
  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
  }
  type Query {
    hi: String
  }
`;