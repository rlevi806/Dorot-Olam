using Dapper;
using DorotOlam.Models;
using DorotOlam.Models.Interface;
using Microsoft.Extensions.Options;
using System;
using System.Data;
using System.Data.SqlClient;

namespace DorotOlam.DAL
{
    public class DAL:IDAL
    {
        protected string ConnectionString { get; set; }

        #region ctor

        public DAL(IOptions<AppSettings> appSettings)
        {
            this.ConnectionString = appSettings.Value.ConnectionStrings.ConnectionString;

        }

        #endregion ctor
        public string UpdateUserData()//IndexDetailes indexDetailes,ProfileDetailes profileDetailes)
        {
            try
            {
                using (var con = new SqlConnection(ConnectionString))
                {
                        con.Open();
                        var res = con.Query(sql: "SP_UpdatePassed",
                            commandType: CommandType.StoredProcedure,
                            param: new
                            {
                                FirstName = "lea"
                                //                        FirstName = indexDetailes.FirstName
                                //                       ,LastName = indexDetailes.LastName
                                //                       ,PreLastName= indexDetailes.PreviousFamilyName
                                //                       ,Gender = indexDetailes.Gender
                                //                       ,Title = indexDetailes.Gender
                                //                       ,Pedigree = indexDetailes.Degree
                                //,Picture  = indexDetailes.Picture
                                //,GravestonePicture = indexDetailes.SituationPicture
                                //,BirthDate  = profileDetailes.BirthDate
                                //,BirthPlace = profileDetailes.Birthplace
                                //,DeathSate = profileDetailes.Deathdate
                                //,DeathPlace = profileDetailes.Deathplace
                                //,Age = profileDetailes.Deathage
                                //,BurialPlace = profileDetailes.Durialplace
                                //,LifeHistory = profileDetailes.Lifehistory
                                //,MainAddress = profileDetailes.moreAddress
                                //,MoreAddresses = profileDetailes.moreAddress
                                //,TagsId = profileDetailes.tags
                                //,CommunityId = indexDetailes.Attribution
                                //,[StudyPlaces] = @StudyPlaces
                                //,[OccupationPlaces] = @OccupationPlaces
                                //,[Jobs] = @Jobs
                                //,[Works] = @Works
                                //,[ExtraLinks] = @ExtraLinks
                                //,[GravestoneText] = @GravestoneText
                            });

                        return "";
                }
            }
            catch (Exception ex)
            {
                throw;
            }

        }

        public string InsertUserData()//IndexDetailes indexDetailes,ProfileDetailes profileDetailes)
        {
            try
            {
                using (var con = new SqlConnection(ConnectionString))
                {
                    con.Open();
                    var res = con.Query(sql: "SP_InsertPassed",
                        commandType: CommandType.StoredProcedure,
                        param: new
                        {
                            Id="30565656",
                            FirstName = "lea"
                                //                        FirstName = indexDetailes.FirstName
                                //                       ,LastName = indexDetailes.LastName
                                //                       ,PreLastName= indexDetailes.PreviousFamilyName
                                //                       ,Gender = indexDetailes.Gender
                                //                       ,Title = indexDetailes.Gender
                                //                       ,Pedigree = indexDetailes.Degree
                                //,Picture  = indexDetailes.Picture
                                //,GravestonePicture = indexDetailes.SituationPicture
                                //,BirthDate  = profileDetailes.BirthDate
                                //,BirthPlace = profileDetailes.Birthplace
                                //,DeathSate = profileDetailes.Deathdate
                                //,DeathPlace = profileDetailes.Deathplace
                                //,Age = profileDetailes.Deathage
                                //,BurialPlace = profileDetailes.Durialplace
                                //,LifeHistory = profileDetailes.Lifehistory
                                //,MainAddress = profileDetailes.moreAddress
                                //,MoreAddresses = profileDetailes.moreAddress
                                //,TagsId = profileDetailes.tags
                                //,CommunityId = indexDetailes.Attribution
                                //,[StudyPlaces] = @StudyPlaces
                                //,[OccupationPlaces] = @OccupationPlaces
                                //,[Jobs] = @Jobs
                                //,[Works] = @Works
                                //,[ExtraLinks] = @ExtraLinks
                                //,[GravestoneText] = @GravestoneText
                            });

                    return "";
                }
            }
            catch (Exception ex)
            {
                throw;
            }

        }
        public string SelectUserData()//IndexDetailes indexDetailes,ProfileDetailes profileDetailes)
        {
            try
            {
                using (var con = new SqlConnection(ConnectionString))
                {

                    con.Open();
                    var res = con.ExecuteScalar<dynamic>(sql: "SP_SelectPassed",
                        commandType: CommandType.StoredProcedure,
                        param: new
                        {
                            //Id = "30565656",
                            //FirstName = "lea"
                          
                        });

                    return "";
                }
            }
            catch (Exception ex)
            {
                throw;
            }

        }

       
            public Record GetRootDetailes(string numId)
        {
            Record record = new Record() ;
            PersonalInformation personalInformation = new PersonalInformation();
            Legacy legacy = new Legacy();
            LifeStory lifeStory = new LifeStory();
            Family family = new Family();
            FamilyP familyP = new FamilyP();
            try
            {
                using (var con = new SqlConnection(ConnectionString))
                {
                    // select Index object
                    con.Open();
                    var resIndex = con.QueryFirstOrDefault<PersonalInformation>(sql: "SP_SelectIndexDetailes",
                        commandType: CommandType.StoredProcedure,
                        param: new
                        {
                            Id = numId
                        });
                   
                    personalInformation.Id= resIndex.Id;
                    personalInformation.FirstName = resIndex.FirstName;
                    personalInformation.LastName = resIndex.LastName;
                    personalInformation.PreviousFamilyName = resIndex.PreviousFamilyName;
                    personalInformation.Gender = resIndex.Gender;
                    personalInformation.Attribution = resIndex.Attribution;
                    personalInformation.Degree = resIndex.Degree;
                    personalInformation.Picture = resIndex.Picture;
                    personalInformation.SituationPicture = resIndex.SituationPicture;


                    //select study place
                    var resStudyPlace = con.Query<StudyPlace>(sql: "SP_SelectStudyPlace",
                       commandType: CommandType.StoredProcedure,
                       param: new
                       {
                           Id = numId
                       }).AsList();
                    
                    legacy.studyPlace= resStudyPlace;

                    //select Rabbies

                    var resRabbis = con.Query<Teacher>(sql: "SP_SelectRabbis",
                       commandType: CommandType.StoredProcedure,
                       param: new
                       {
                           Id = numId
                       }).AsList();
                   
                    legacy.rabbis = resRabbis;

                    //select Student

                    var resStudent = con.Query<Student>(sql: "SP_SelectStudent",
                       commandType: CommandType.StoredProcedure,
                       param: new
                       {
                           Id = numId
                       }).AsList();

                    legacy.student = resStudent;


                    //select Work
                    var resWork = con.Query<Work>(sql: "SP_SelectWork",
                       commandType: CommandType.StoredProcedure,
                       param: new
                       {
                           Id = numId
                       }).AsList();
                    legacy.work = resWork;

                    //select Links
                    var resLink = con.Query<MoreLink>(sql: "SP_SelectLinks",
                       commandType: CommandType.StoredProcedure,
                       param: new
                       {
                           Id = numId
                       }).AsList();
                    legacy.moreLink = resLink;

                    // select Profile Detailes 
                    var resProfile = con.QueryFirstOrDefault<LifeStory>(sql: "SP_SelectProfileDetailes",
                        commandType: CommandType.StoredProcedure,
                        param: new
                        {
                            Id = numId
                        });

                    lifeStory.BirthDate = resProfile.BirthDate;
                    lifeStory.Birthplace = resProfile.Birthplace;
                    lifeStory.Deathage = resProfile.Deathage;
                    lifeStory.Deathdate = resProfile.Deathdate;
                    lifeStory.Deathplace = resProfile.Deathplace;
                    lifeStory.Durialplace = resProfile.Durialplace;
                    lifeStory.Lifehistory = resProfile.Lifehistory;
                    lifeStory.Residence = resProfile.Residence;
                    lifeStory.tags = resProfile.tags;
                    var resProfileAdress = con.Query<MoreAddress>(sql: "SP_SelectMoreAdress",
                        commandType: CommandType.StoredProcedure,
                        param: new
                        {
                            Id = numId
                        }).AsList();
                    lifeStory.moreAddress = resProfileAdress;

                    // select Register Detailes 
                    var resRegister = con.QueryFirstOrDefault<FamilyP>(sql: "SP_SelectRegisterDetailes",
                        commandType: CommandType.StoredProcedure,
                        param: new
                        {
                            Id = numId
                        });

                    familyP.FatherId = resRegister.FatherId;
                    familyP.FatherFirstName = resRegister.FatherFirstName;
                    familyP.FatherLastName = resRegister.FatherLastName;
                    familyP.FatherOrigin = resRegister.FatherOrigin;

                    familyP.MotherId = resRegister.MotherId;
                    familyP.MotherFirstName = resRegister.MotherFirstName;
                    familyP.MotherLastName = resRegister.MotherLastName;
                    familyP.MotherOrigin = resRegister.MotherOrigin;

                    familyP.SpouseId = resRegister.SpouseId;
                    familyP.SpouseFirstName = resRegister.SpouseFirstName;
                    familyP.SpouseLastName = resRegister.SpouseLastName;
                    familyP.SpouseOrigin = resRegister.SpouseOrigin;
                    family.registerDetailesP = familyP;
                    // select Register More People 
                    var resRegisterP = con.Query<MoreFamilyMember>(sql: "SP_SelectMoreFamilyMember",
                        commandType: CommandType.StoredProcedure,
                        param: new
                        {
                            Id = numId
                        }).AsList();
                    family.moreFamilyMember = resRegisterP;
                    record.PersonalInformation = personalInformation;
                    record.Legacy = legacy;
                    record.LifeStory = lifeStory;
                    record.Family = family;

                }
            }
            catch (Exception ex)
            {
                throw;
            }


            return record;
        }
    }
}
