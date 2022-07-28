import { ArticleHeader } from './ArticleHeader'
import { HeaderComponent } from './headerTypes'
import { MainHeader } from './MainHeader'

export function headerFactory(isRootPath: boolean): HeaderComponent {
    return isRootPath ? MainHeader : ArticleHeader
}
