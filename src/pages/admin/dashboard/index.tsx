import { Card, CardContent } from '@/components/ui/card'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import ContentLayout from '@/components/admin-panel/ContentLayout'

const Dashboard = () => {
  return (
    <ContentLayout title="Account">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href="/">Home</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href="/dashboard">Dashboard</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Account</BreadcrumbPage>
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
