import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";



actor {
  public type JobListing = {
    id : Nat;
    title : Text;
    description : Text;
    location : Text;
    requirements : Text;
    benefits : Text;
    postedDate : Time.Time;
    isActive : Bool;
  };

  public type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    submittedDate : Time.Time;
  };

  public type LeadershipMember = {
    name : Text;
    position : Text;
    bio : Text;
    photoUrl : Text;
  };

  public type Revision = {
    date : Time.Time; // Timestamp of the revision
    description : Text; // Description of the changes made
  };

  public type Service = {
    title : Text;
    description : Text;
    details : Text;
    price : Text;
    duration : Text;
  };

  public type Solution = {
    name : Text;
    description : Text;
    features : Text;
  };

  public type CompanyInfo = {
    name : Text;
    tagline : Text;
    mission : Text;
    address : Text;
    phone : Text;
    email : Text;
    logoUrl : Text;
    businessHours : Text;
    socialLinks : {
      linkedin : Text;
      twitter : Text;
      facebook : Text;
      instagram : Text;
    };
    revisions : [Revision];
  };

  // Storage for job listings, contact submissions, and company info
  let jobListings = Map.empty<Nat, JobListing>();
  let contactSubmissions = Map.empty<Nat, ContactSubmission>();
  let companyUpdates = Map.empty<Nat, CompanyInfo>();

  var nextJobId = 1;
  var nextContactId = 1;
  var updateCounter = 0;

  var companyInfo : CompanyInfo = {
    name = "Aegentra";
    tagline = "Identity & Access Security";
    mission = "Building and Scaling Identity Infrastructures for the Digital Age";
    address = "Green City, Visakhapatnam, India";
    phone = "+91 (709) 301-4620";
    email = "info@aegentra.com";
    logoUrl = "/assets/aegentra-logo-v2-transparent.dim_400x200.png";
    businessHours = "Mon-Fri: 9am - 6pm IST";
    socialLinks = {
      linkedin = "https://linkedin.com";
      twitter = "https://twitter.com";
      facebook = "https://facebook.com";
      instagram = "https://instagram.com";
    };
    revisions = [];
  };

  var leadershipTeam : [LeadershipMember] = [
    {
      name = "Paolo Sora";
      position = "Founder & CEO";
      bio = "Experienced cybersecurity leader with a passion for innovation.";
      photoUrl = "/assets/ceo-pic.png";
    },
  ];

  let servicesList = [
    {
      title = "IT Security Consulting";
      description = "Comprehensive security assessment and strategy development.";
      details = "We analyze your IT infrastructure and provide tailored recommendations to enhance your security posture. Our team ensures your systems are resilient against modern cyber threats.";
      price = "$5000";
      duration = "2 Weeks";
    },
    {
      title = "Identity & Access Management";
      description = "Secure authentication and access control solutions.";
      details = "Implement robust identity management systems to streamline user access and ensure compliance with industry standards. Our solutions prioritize user experience while maintaining top-level security.";
      price = "$8000";
      duration = "4 Weeks";
    },
    {
      title = "Governance & Compliance";
      description = "Regulatory compliance and risk management services.";
      details = "Our experts assist in navigating complex regulatory requirements such as GDPR, HIPAA, and more. We help you maintain compliance and mitigate risks effectively.";
      price = "$7000";
      duration = "3 Weeks";
    },
  ];

  let solutionsList = [
    {
      name = "IAM Solutions";
      description = "Centralized identity management platform.";
      features = "User provisioning, single sign-on, multi-factor authentication.";
    },
    {
      name = "PAM Solutions";
      description = "Privileged access and session management tools.";
      features = "Role-based access control, session recording, credential vaults.";
    },
    {
      name = "Governance Tools";
      description = "Compliance and risk assessment platform.";
      features = "Automated compliance checks, reporting, and audit trails.";
    },
  ];

  public shared ({ caller }) func addJobListing(title : Text, description : Text, location : Text, requirements : Text, benefits : Text) : async Nat {
    let jobId = nextJobId;
    nextJobId += 1;

    let job : JobListing = {
      id = jobId;
      title;
      description;
      location;
      requirements;
      benefits;
      postedDate = Time.now();
      isActive = true;
    };

    jobListings.add(jobId, job);
    jobId;
  };

  public query ({ caller }) func getJobListings() : async [JobListing] {
    jobListings.values().toArray().filter(func(job) { job.isActive });
  };

  public shared ({ caller }) func updateJobListing(jobId : Nat, title : Text, description : Text, location : Text, requirements : Text, benefits : Text) : async () {
    switch (jobListings.get(jobId)) {
      case (null) { Runtime.trap("Job not found!") };
      case (?job) {
        let updatedJob : JobListing = {
          job with
          title;
          description;
          location;
          requirements;
          benefits;
        };
        jobListings.add(jobId, updatedJob);
      };
    };
  };

  public shared ({ caller }) func deleteJobListing(jobId : Nat) : async () {
    switch (jobListings.get(jobId)) {
      case (null) { Runtime.trap("Job not found!") };
      case (?_job) {
        jobListings.remove(jobId);
      };
    };
  };

  public shared ({ caller }) func submitContact(name : Text, email : Text, message : Text) : async Nat {
    let contactId = nextContactId;
    nextContactId += 1;

    let contact : ContactSubmission = {
      id = contactId;
      name;
      email;
      message;
      submittedDate = Time.now();
    };

    contactSubmissions.add(contactId, contact);
    contactId;
  };

  public query ({ caller }) func getContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray();
  };

  public query ({ caller }) func getCompanyInfo() : async CompanyInfo {
    companyInfo;
  };

  public shared ({ caller }) func updateCompanyInfo(name : Text, tagline : Text, mission : Text, address : Text, phone : Text, email : Text, logoUrl : Text, businessHours : Text, linkedin : Text, twitter : Text, facebook : Text, instagram : Text) : async () {
    let updatedInfo : CompanyInfo = {
      name;
      tagline;
      mission;
      address;
      phone;
      email;
      logoUrl;
      businessHours;
      socialLinks = {
        linkedin;
        twitter;
        facebook;
        instagram;
      };
      revisions = companyInfo.revisions.concat([
        {
          date = Time.now();
          description = "Update counter: " # updateCounter.toText();
        },
      ]);
    };
    companyInfo := updatedInfo;
    companyUpdates.add(updateCounter, updatedInfo);
    updateCounter += 1;
  };

  public query ({ caller }) func getLeadershipTeam() : async [LeadershipMember] {
    leadershipTeam;
  };

  public shared ({ caller }) func addLeadershipMember(name : Text, position : Text, bio : Text, photoUrl : Text) : async () {
    let member : LeadershipMember = {
      name;
      position;
      bio;
      photoUrl;
    };
    leadershipTeam := leadershipTeam.concat([member]);
  };

  public shared ({ caller }) func removeLeadershipMember(name : Text) : async () {
    let originalLength = leadershipTeam.size();
    leadershipTeam := leadershipTeam.filter(
      func(member) { member.name != name }
    );
    if (leadershipTeam.size() == originalLength) {
      Runtime.trap("Member not found.");
    };
  };

  public query ({ caller }) func getServices() : async [Service] {
    servicesList;
  };

  public query ({ caller }) func getSolutions() : async [Solution] {
    solutionsList;
  };

  public query ({ caller }) func getCompanyRevisions() : async ([(Nat, CompanyInfo)], [Revision]) {
    var allRevisions : [Revision] = [];
    for ((_, info) in companyUpdates.entries()) {
      allRevisions := allRevisions.concat(info.revisions);
    };
    let sortedRevisions = allRevisions.sort(
      func(a, b) { Int.compare(a.date, b.date) }
    );
    (companyUpdates.toArray(), sortedRevisions);
  };
};
