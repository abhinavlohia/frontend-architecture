import {
    useUsersControllerFindAllQuery,
    useMasterDataControllerGetCountriesQuery
} from '@/shared/api/generatedApi';

interface User {
    id: string;
    email: string;
}

interface Country {
    id: number;
    name: string;
}

//This is just a dummy file created to test FE and BE connection
export const App = () => {
    const {
        data: users = [],
        isLoading: isUsersLoading,
        isError: isUsersError,
        error: usersError
    } = useUsersControllerFindAllQuery();

    const {
        data: countries = [],
        isLoading: isCountriesLoading,
        isError: isCountriesError,
        error: countriesError
    } = useMasterDataControllerGetCountriesQuery({ fields: undefined as unknown as string });

    if (isUsersLoading || isCountriesLoading) return <div>Loading data...</div>;

    if (isUsersError || isCountriesError) {
        console.error('API Error:', usersError || countriesError);
        return <div>Please run backend server on local and then try again</div>;
    }

    return (
        <div>
            <h1>Frontend Architecture Initialized</h1>
            <p>Feature-Sliced Design with React 19, Vite, and Redux Toolkit</p>

            <h2>Users from Backend (via Swagger Generated API):</h2>
            <ul>
                {(users as User[]).map((user) => (
                    <li key={user.id}>
                        ID: {user.id}, Email: {user.email}
                    </li>
                ))}
            </ul>

            <h2>Countries (Master Data):</h2>
            <ul>
                {(countries as Country[]).map((country) => (
                    <li key={country.id}>
                        {country.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
