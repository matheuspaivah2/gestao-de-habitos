import { GroupsProvider } from './Groups';
import HabitsProvider from './habits';
import { MyGroupsProvider } from './MyGroups';

const Providers = ({children}) => {
  return (
      <MyGroupsProvider>
        <GroupsProvider>
          <HabitsProvider>
            {children}
          </HabitsProvider>
        </GroupsProvider>
      </MyGroupsProvider>
  )
}

export default Providers;