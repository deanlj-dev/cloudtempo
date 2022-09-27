Todos:

- [x] First install notification
- [x] Cloudformation menu
- [x] License checking
- [x] Drop me a line
- [x] Actions menu (favorites, aliases, copy arn)
- [x] Onboarding flow (thanks for installing, bla bla initial scan in the background)
- [x] Menu for selecting services with coming soon section inside configuration
- [x] Store documents with accountId prefix to ensure tenant isolation
- [x] Encode documents with accountId + something to keep it safe
- [x] Get rid of vercel references
- [x] Proper name, description, and app icon
- [x] Fresh AWS Account for CloudTango
- [x] If license key not present, render actual value for X trial left
- [x] If license key present, do not show "activate" item
- [x] Periodic license checking
- [x] Proper services to selected services menu
- [x] Clearing up input value when navigating to submenu
- [x] Fix toaster
- [x] Deactivate product is license key not present AND timeRemaining negative
- [x] Improve cors authing - faster, based on retries?
- [x] Toast z-index
- [x] GET /alpha
- [x] Send an email after purchase (waiting for Postmark confirmation)
- [x] Last indexing text is fixed, should be dynamic
- [x] Open in a new tab is broken
- [x] Because last reindexed date is stored in a cookie, it doesn't show when changing from AWS Console to S3 console (should be moved to the worker)
- [x] Regions menu double nested
- [x] Indexing progress bar
- [x] Selecting DynamoDB option does not work?
- [x] Clicking Selected Regions/services does not work (only checkbox, text is fine)
- [x] Open in a new tab
- [x] Icons are broken if visiting other regions, figure way to bundle images
- [x] X to close onboarding
- [x] Notification theme should match overall theme
- [x] Onboarding if index on found
- [x] ECS Services indexing
- [x] SGs/subnet/vpc indexing
- [x] DAX
- [x] SNS
- [x] But add icons and supported serivces!
- [x] Enhance credentials with accountId (because it's needed for ARN)
- [x] API for checking latest version
- [x] Better services (remake services menu based on awsc-mezz)
- [x] Scrollbar styling
- [x] Move filtering primarly to Minisearch
- [ ] ARN to Console link (check if correct account!)
- [ ] CMD+K does not work on CW page
- [ ] Centralize services definitions
- [ ] Improve error reporting
- [ ] Parametrize search / expose settings to the user

- [ ] Publish to Chrome Web Store
- [x] Publish Edge Extension
- [ ] Mozilla Extension

Landing:

- [x] Features section
- [x] List supported and planned services
- [x] FAQ
- [x] Stay in the loop (newsletter)
- [x] Footer (Roadmap, Twitter,Download, Dynobase, Privacy Policy, Terms of Service, Contact Us)
- [x] Sitemap
- [x] Robots.txt
- [x] Privacy Policy Page
- [x] Nicer roadmap
- [x] FAQ Page
- [x] Layout
- [x] MDX setup
- [x] Alpha download instructions page
- [x] Nav
- [x] Favicon
- [x] Changelog
- [x] Buy Page
- [x] Meta for homepage
- [x] Yearly options
- [x] og-images
      <<<<<<< HEAD
- [ ] # If on phone, email me a link
- [x] If on phone, email me a link
  > > > > > > > f294699e17b55bbba446deed1500587f072303ef
- [ ] Testimonials Section
- [ ] Usable on mobile

Trials:

- 7 days per `aws-userInfo` cookie
- Similarily to Dynobase, cloudtango uses getOrCreateMachine functionality
- Machine record can be enriched with LicenseKey (licenseKey is indexed)
- License key can be used to activate up to 10 aws identities
- Machine doesn't matter, AWS identity matters (or maybe account?)

Marketing:

- [ ] Lifetime believer plan (50 user identities) for $399 (limited to 25 users)
- [x] Casual plan (3 user identities) $9/month (or $99/year)
- [x] Power user plan (50 user identities) $19/month (or $199/year)

Services for initial launch:

- [x] Lambda - covered by DynamoDB & ECS
- [x] DynamoDB - covered by DynamoDB
- [x] S3 - covered by DynamoDB
- [x] CloudFormation - covered by ECS
- [x] Cloudwatch Logs - covered by ECS
- [x] IAM (Roles, Users) - covered by ECS
- [x] EC2 (Instances) - covered by ECS
- [x] VPC (VPCs, Subnets, SGs) - covered by ECS
- [x] ECS (Clusters, Services) - covered by ECS
- [x] SNS
- [x] DAX

Later add:

- [ ] CloudFormation Resources Menu / Tree view
- [ ] Search configuration
- [ ] Aliases
- [ ] Indexing tags
- [ ] Recently opened section
- [ ] IAM Groups
- [ ] SSM Parameter Store
- [ ] Secrets Manager
- [ ] RDS
- [ ] Route53

Stack:

- Infra: AWS
- Landing: Vercel
- Emails: Postmark
- Domain: Namecheap (DNS) + Route53 (HZ)
- Shop: LemonSqueezy

Edge review note:

This extension is an overlay for AWS Console (Amazon Web Services). After installing, please head to https://847163508457.signin.aws.amazon.com/console and use following credentials to login:

username: edge-review
password: edge-review-12345

After doing so, you can open actual extension by pressing CTRL + M or CMD + K.

Content plan:

- How to use CloudTango AWS query language?
- aws find all resources
- aws find all lambda functions
- how to find aws access key
- unable to resolve module ./aws-exports / Cannot find file './aws-exports'
-
