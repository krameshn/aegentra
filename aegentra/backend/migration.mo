import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Storage "blob-storage/Storage";
import Time "mo:core/Time";

module {
  type JobListing = {
    id : Nat;
    title : Text;
    description : Text;
    location : Text;
    requirements : Text;
    benefits : Text;
    postedDate : Time.Time;
    isActive : Bool;
  };

  type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    submittedDate : Time.Time;
  };

  type LeadershipMember = {
    name : Text;
    position : Text;
    bio : Text;
    photoUrl : Text;
  };

  type Revision = {
    date : Time.Time;
    description : Text;
  };

  type Service = {
    title : Text;
    description : Text;
    details : Text;
    price : Text;
    duration : Text;
  };

  type Solution = {
    name : Text;
    description : Text;
    features : Text;
  };

  type CompanyInfo = {
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

  // Old WhitePaper structure
  type OldWhitePaper = {
    id : Nat;
    title : Text;
    description : Text;
    author : Text;
    publishedDate : Time.Time;
    file : Storage.ExternalBlob;
    fileSize : Nat;
    downloadCount : Nat;
  };

  // New WhitePaper structure
  type NewWhitePaper = {
    id : Nat;
    title : Text;
    shortDescription : Text;
    longDescription : Text;
    author : Text;
    publishedDate : Time.Time;
    file : Storage.ExternalBlob;
    fileSize : Nat;
    downloadCount : Nat;
  };

  type OldActor = {
    jobListings : Map.Map<Nat, JobListing>;
    contactSubmissions : Map.Map<Nat, ContactSubmission>;
    companyUpdates : Map.Map<Nat, CompanyInfo>;
    whitePapers : Map.Map<Nat, OldWhitePaper>;
    nextJobId : Nat;
    nextContactId : Nat;
    nextWhitePaperId : Nat;
    updateCounter : Nat;
    companyInfo : CompanyInfo;
    leadershipTeam : [LeadershipMember];
  };

  type NewActor = {
    jobListings : Map.Map<Nat, JobListing>;
    contactSubmissions : Map.Map<Nat, ContactSubmission>;
    companyUpdates : Map.Map<Nat, CompanyInfo>;
    whitePapers : Map.Map<Nat, NewWhitePaper>;
    nextJobId : Nat;
    nextContactId : Nat;
    nextWhitePaperId : Nat;
    updateCounter : Nat;
    companyInfo : CompanyInfo;
    leadershipTeam : [LeadershipMember];
  };

  public func run(old : OldActor) : NewActor {
    let mappedWhitePapers = old.whitePapers.map<Nat, OldWhitePaper, NewWhitePaper>(
      func(_id, whitePaper) {
        {
          whitePaper with
          shortDescription = whitePaper.description;
          longDescription = "";
        };
      }
    );
    { old with whitePapers = mappedWhitePapers };
  };
};
