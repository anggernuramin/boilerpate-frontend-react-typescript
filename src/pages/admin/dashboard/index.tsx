import { Card, CardContent } from '@/components/ui/card'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb'
import ContentLayout from '@/components/admin-panel/ContentLayout'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <ContentLayout title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="mt-6 border-none rounded-lg">
        <CardContent className="p-6">
          <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
            <div className="relative flex flex-col">
              <img src="../../../assets/react.svg" alt="Placeholder Image" width={500} height={500} />
              <div className="absolute right-0 -bottom-8">
                <a
                  href="https://www.freepik.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground"
                >
                  Designed by Freepik
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  )
}

export default Dashboard
