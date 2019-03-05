import { CURRENT_USER_QUERY } from './components/User';

const mockUser = {
	__typename: "Query", 
	id: "kfjasldkfjaldskfkb",
	email: "fakeUser@fakemail.com", 
	name: "fakeuser123", 
	screenName: "Fake User", 
	avatar: "https://fakeimages.com/images/fake.jpg"
}

const signedOutMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: null } },
  },
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
			data: {
				me: {
					...mockUser
				}
			}
		}
  }
];

export { mockUser, signedInMocks, signedOutMocks };
