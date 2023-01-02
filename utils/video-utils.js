import {
   isLive,
   redirect_uri,
   id_service_client_id,
   absolutePath,
} from "./constants";
import { setCookies, getCookie, removeCookies } from "cookies-next";

// Analytics
export function googleAnalytics(label, activity) {
   try {
      ga(
         "send",
         "event",
         label,
         activity,
         "URL: " + absolutePath + "/question-answer/"
      );
   } catch (err) {}
}

export function pushDataLayer(objectData) {
   // clevertap?.event.push(objectData.event,objectData);
   // clevertap.profile.push({
   //   "Site": {
   //     "Identity":(localStorage.getItem('accesstoken') && localStorage.getItem('phone'))
   //       ? '+'+localStorage.getItem('extension')+'-'+localStorage.getItem('phone')
   //       : '',
   //     "Phone": (localStorage.getItem('accesstoken') && localStorage.getItem('phone'))
   //       ? '+'+localStorage.getItem('extension')+localStorage.getItem('phone')
   //       : '',
   //     "product":"QNA",
   //     "product_source":["QNA"],
   //     "grade": (localStorage.getItem('accesstoken') && localStorage.getItem("userGrade"))
   //       ? localStorage.getItem("userGrade")
   //       : '',
   //     "Name":(localStorage.getItem('accesstoken') && localStorage.getItem('userName'))
   //       ? localStorage.getItem('userName')
   //       : 'QNA User',
   //     "Email": (localStorage.getItem('accesstoken'))
   //       ? localStorage.getItem('userEmailId')
   //       :'qnauser@example.com',
   //     "user_type":(localStorage.getItem('accesstoken') && localStorage.getItem('phone'))
   //       ? "free user"
   //       : "free traffic",
   //     "MSG-email":false,
   //     "MSG-sms":false,
   //     "is_whatsapp_consent":false,
   //     "MSG-whatsapp":false,
   //     }
   //   });
   // console.log("Data event : ", JSON.stringify(objectData));
   window.dataLayer?.push(objectData);
}

export function pageScrollPercentage(eventName) {
   // var isScrolling;
   // var maxScroll=0;
   //       window.addEventListener('scroll', function ( event ) {
   //       let scrollTop = window.scrollY;
   //       let docHeight = document.body.offsetHeight;
   //       let winHeight = window.innerHeight;
   //       let scrollPercent = scrollTop / (docHeight - winHeight);
   //       if(scrollPercent>maxScroll){
   //       maxScroll=scrollPercent;
   //       let scrollPercentRounded = Math.round(maxScroll * 100);
   //       scrollPercentRounded=Math.min(100,Math.max(scrollPercentRounded,0));
   //       window.clearTimeout( isScrolling );
   //       isScrolling = setTimeout(function() {
   //       if(eventName!='noEvent'){
   //         if(eventName=='qa_solutionpage_scroll'){
   //           pushDataLayer({
   //             'event':eventName,
   //             'scroll_depth':scrollPercentRounded,
   //             'blocker_type':'videoBlocker'
   //           })
   //         }else{
   //           pushDataLayer({
   //             'event':eventName,
   //             'scroll_depth':scrollPercentRounded,
   //           })
   //         }
   //       }
   //     }, 66);
   //   }
   // }, false);
}

export function isSafariOrIOSDevice() {
   const userAgent = window.navigator.userAgent.toLowerCase();
   if (
      ["ipad", "iphone", "ipod"].some(
         (item) => userAgent.indexOf(item) !== -1
      ) ||
      (userAgent.indexOf("safari") !== -1 && userAgent.indexOf("chrome") === -1)
   ) {
      return true;
   }
   return false;
}

export function isMobileDevice() {
   if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
         navigator.userAgent
      )
   ) {
      return true;
   }
   return false;
}

export function storeVideoWatchData(videoId, userId, type, value) {
   var dataToSendSolutionVideoRating = {
      videoId: videoId,
      userId: userId,
      type: type,
      value: value,
   };
   return fetch("/question-answer/api/update_video_user_data/", {
      method: "POST",
      body: JSON.stringify(dataToSendSolutionVideoRating),
   });
}

export function updateDomainsData(toggledSubDomain) {
   return fetch("/question-answer/api/google_solver/get_solver_questions/", {
      method: "POST",
      body: JSON.stringify({
         entity_id: toggledSubDomain.entity_id,
      }),
   });
}

export function triggerAnalytics(type, index, docId) {
   setCookies("flow_type", type, { maxAge: 60 * 60 * 24 });
   setCookies("flow_index", index, { maxAge: 60 * 60 * 24 });
   setCookies("docId", docId, { maxAge: 60 * 60 * 24 });
}

// Redirections

export function openByjusRegistration(campaignString, labelName) {
   googleAnalytics(labelName, "click");
   window.open(
      "https://byjus.com/byjus-classes-book-a-free-demo-class/registration/?utm_source=qawebsite&utm_medium=questions&utm_campaign=" +
         campaignString,
      "_blank",
      "noopener"
   );
}

export function openByjusClassesRegistration(
   label,
   activity,
   bannerPlacement,
   url
) {
   googleAnalytics(label, activity);
   if (bannerPlacement == "bottomBanner") {
      window.open(url, "_blank", "noopener");
   } else {
      if (label == "qa_solpage_topbanner_clicked") {
         window.open(
            "https://byjus.com/byjus-classes-book-a-free-60-minutes-class/registration/?utm_source=qawebsite&utm_medium=solutionpagestopbannerm-mweb&utm_campaign=" +
               bannerPlacement,
            "_blank",
            "noopener"
         );
      } else {
         window.open(url, "_blank", "noopener");
      }
   }
}

export function redirectToHome() {
   window.location.href = "/question-answer/";
}

// Formatters

function stripHtml(html) {
   return html.replace(/<[^>]*>?/gm, "");
}

export function limitTo100(text) {
   if (text) {
      text = stripHtml(text);
      return text.substr(0, 97);
   }
   return text;
}

export function removeOptions(input) {
   if (input) {
      try {
         var output = input.replace(/\s*<ul[^>]*>[\S\s]*?<\/ul>\s*/, "");
         output = output.replace(/\s*<ol[^>]*>[\S\s]*?<\/ol>\s*/, "");
         output = replaceS3(output);
      } catch (err) {
         return output;
      }
      return output;
   }

   return input;
}

export function removeSpacesLatex(input) {
   if (input == undefined) {
      return "Something went wrong";
   }
   var output = input;
   output = output.replace(/&nbsp;/g, " ");
   output = output.replace(/&#xA0;/g, " ");
   output = output.replace("<p>", '<p style="display:inline">');
   // if (sol) {
   //   output = output.replace("<img", '<img loading="lazy" ');
   // }
   var re = new RegExp(String.fromCharCode(160), "g");
   output = output.replace(re, " ");
   return output;
}

export function replaceS3(input) {
   if (input) {
      try {
         var output = "";
         if (isLive) {
            output = input.replace(
               /https:\/\/meritnation-question-images.s3.ap-southeast-1.amazonaws.com/g,
               "https://search-static.byjusweb.com/question-images"
            );
         } else {
            output = input.replace(
               /https:\/\/meritnation-question-images.s3.ap-southeast-1.amazonaws.com/g,
               "https://search-static-stg.byjusweb.com/question-images"
            );
         }
         output = output.replace(/<div>&#xA0;<\/div>/g, "");
         output = output.replace(/<p>&#xA0;<\/p>/g, "");
         output = output.replace(/<span>&#xA0;<\/span>/g, "");
         output = output.replace(/<div>&#xA0;<\/div>/g, "");
         output = output.replace(/<br\/><br\/>/g, "<br/>");
         output = output.replace(/<br><br><br>/g, "<br>");
         output = output.replace(/<br><br>/g, "<br>");
         output = output.replace(/&nbsp;/g, " ");
         output = output.replace(/&#xA0;/g, " ");
         output = output.replace(/<em>/g, "");
         output = output.replace(/&#160;/g, " ");
         output = output.replace(
            /width=\"1667\" height=\"1667\"/g,
            /width="369" height="369"/g
         );
         var re = new RegExp(String.fromCharCode(160), "g");
         output = output.replace(re, " ");
      } catch (err) {
         return input;
      }

      try {
         var characters = output.split("");
         var urls = [];

         for (var i = 0; i < characters.length; i++) {
            if (
               characters[i] == "s" &&
               characters[i + 1] == "r" &&
               characters[i + 2] == "c" &&
               characters[i + 3] == "="
            ) {
               var j = i + 5;
               var found = false;
               var url = "";
               while (!found) {
                  if (characters[j] == '"') {
                     found = true;
                     break;
                  }
                  url += characters[j];
                  j++;
               }
               urls.push(url);
            }
         }
         for (var i = 0; i < urls.length; i++) {
            var toReplace = urls[i].split("https://")[1];
            var goodString = toReplace.replace("//", "/");
            output = output.replace(toReplace, goodString);
         }
      } catch (err) {
         return output;
      }

      return output;
   }

   return input;
}

export function breadCrumbFormatter(input) {
   input = removeDashes(input);
   input = input.replace(/</g, " ");
   input = input.replace(/>/g, " ");
   return input;
}

export function removeDashes(input) {
   if (input) {
      input = input.replace(/<[^>]*>?/gm, "");
      return removeOptions(input.replace(/-/g, " "));
   } else {
      return "...";
   }
}

export function kFormatter(num) {
   return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
}

export function titleFormatter(url) {
   if (url) {
      var newFormat = url
         .replace(/(<([^>]+)>)/gi, "")
         .replace(/[^A-Za-z0-9 ]+/gi, "-");
      newFormat = newFormat.charAt(0).toUpperCase() + newFormat.slice(1);
      return newFormat;
   }

   return url;
}

export function makeVideoLdJsonSchema(
   name,
   grade,
   title,
   solution,
   thumbnail,
   watchCount,
   contentUrl
) {
   var height = "900";
   var width = "1600";
   try {
      var lastitem = thumbnail.split("/")[thumbnail.split("/").length - 1];
      lastitem = lastitem.toLowerCase();
      lastitem = lastitem.replace(".jpg", "");
      lastitem = lastitem.replace(".png", "");
      height = lastitem.split("x")[0];
      width = lastitem.split("x")[1];
   } catch (err) {
      height = "900";
      width = "1600";
   }
   return {
      "@context": "https://schema.org",
      "@type": ["VideoObject", "LearningResource"],
      name: name,
      description: solution,
      learningResourceType: "Problem Walkthrough",
      educationalLevel: grade + " (IN)",
      text: title,
      contentUrl: contentUrl,
      thumbnailUrl: thumbnail,
      thumbnail: {
         "@type": "ImageObject",
         url: thumbnail,
         height: height,
         width: width,
      },
      uploadDate: "2022-07-04T10:36:42+05:30",
   };
}

export function makeBreadcrumbLdJsonSchema(url, title) {
   return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
         {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://byjus.com/question-answer/",
         },
         {
            "@type": "ListItem",
            position: 2,
            name:
               breadCrumbFormatter(title) != ""
                  ? breadCrumbFormatter(title)
                  : "...",
            item: "https://byjus.com/question-answer/" + url + "/",
         },
      ],
   };
}

export function makeArticleLdJsonSchema(currentUrl, upvotecount, title) {
   currentUrl = currentUrl + "/";

   return {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
         "@type": "WebPage",
         "@id": currentUrl,
      },
      datePublished: "2022-07-04T10:36:42+05:30",
      dateModified: "2022-07-04T10:36:42+05:30",
      dateCreated: "2022-07-04T10:36:42+05:30",
      description: titleFormatter(title),
      headline: titleFormatter(title),
      image: [currentUrl],
      author: {
         "@type": "Person",
         name: "BYJU'S",
         url: "https://cdn1.byjus.com/cbse/2017/09/15151739/BYJUS-LOGO-Purple-3kb.png",
      },
      upvoteCount: upvotecount,
      Question: titleFormatter(title),
      publisher: {
         "@type": "Organization",
         name: "BYJU'S",
         logo: {
            "@type": "ImageObject",
            url: "https://cdn1.byjus.com/cbse/2017/09/15151739/BYJUS-LOGO-Purple-3kb.png",
         },
      },
   };
}

export function makeQALdJsonSchema(currentUrl, upvotecount, title, solution) {
   currentUrl = currentUrl + "/";

   return {
      "@context": "http://schema.org",
      "@type": "QAPage",
      name: titleFormatter(title),
      image: [
         "https://cdn1.byjus.com/cbse/2017/09/15151739/BYJUS-LOGO-Purple-3kb.png",
      ],
      mainEntity: {
         "@type": "Question",
         "@id": currentUrl,
         name: titleFormatter(title),
         text: titleFormatter(title),
         answerCount: "1",
         author: {
            "@type": "Person",
            name: "BYJU'S",
         },
         dateCreated: "2022-07-04T10:36:42+05:30",
         acceptedAnswer: {
            "@type": "Answer",
            upvoteCount: upvotecount,
            text: removeDashes(solution),
            url: currentUrl,
            dateCreated: "2022-07-04T10:36:42+05:30",
            author: {
               "@type": "Person",
               name: "BYJU'S",
            },
         },
         suggestedAnswer: [],
      },
   };
}

export function makeSitelinksLdJsonSchema(currentUrl) {
   return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: currentUrl,
      potentialAction: {
         "@type": "SearchAction",
         target: currentUrl + "?s={searchInput}/",
         "query-input": "required name=searchInput",
      },
   };
}
export function mathsolverTopicMappingFunction(input) {
   if (input) {
      let output = input.toLowerCase();
      output = output.replace(/ /g, "");
      output = output.replace(/\-/, "");
      return output;
   }
   return input;
}

export function fixURLLatex(input) {
   let output = input;
   output = output.replace(/hspace{\d+(.\d+)?\w+}/g, "space");
   if (
      !output.includes("frac") &&
      !output.includes("times") &&
      !output.includes("div")
   ) {
      return output;
   }
   while (output.includes("/")) {
      output = output.replace("/", "\\");
   }
   return output;
}

export function fixFractionNewLineLatex(input) {
   let output = input;
   if (!output.includes("frac")) {
      return output;
   }
   output = output.replace(/hspace{\d+(.\d+)?\w+}/g, "space");
   output = output.replace(/\\frac/g, "\\dfrac");
   return output;
}

export function convertToLatex(input) {
   if (!input) {
      return input;
   }
   var output = input;
   output = output.replace(/hspace{\d+(.\d+)?\w+}/g, "space");
   while (output.includes("$")) {
      output = output.replace("$", "\\(");
      output = output.replace("$", "\\)");
   }
   if (output.includes("span style")) {
      output = output.replace(/<[^>]+>/g, "");
   }
   return output;
}

// API Calling
export function get_solver_suggestions(text) {
   return fetch("/question-answer/api/get_solver_suggestions/", {
      method: "POST",
      body: JSON.stringify({ text: text }),
   });
}

export function get_suggestions(text, doc_id, userId) {
   return fetch("/question-answer/api/get_suggestions/", {
      method: "POST",
      body: JSON.stringify({ text: text, doc_id: doc_id, userid: userId }),
   });
}

export function submitFeedback(qid, text) {
   var dataToSend = {
      feedback: text,
      userToken: getCookie("userToken"),
      qid: qid,
   };
   return fetch("/question-answer/api/feedback/", {
      method: "POST",
      body: JSON.stringify(dataToSend),
   });
}

export function search_lo_by_image(image) {
   return fetch("/question-answer/api/get_mathpix/", {
      method: "POST",
      body: JSON.stringify({ base64String: image }),
   });
}

export function update_banner_data(data, mail_data) {
   return fetch("/question-answer/api/banner_data_update/", {
      method: "POST",
      body: JSON.stringify({
         banner_data: data,
         mail_data: mail_data,
      }),
   });
}

export function submitReport(qid, text, flag) {
   var dataToSend = {
      feedback: text,
      feedback_category: flag,
      userToken: getCookie("userToken"),
      qid: qid,
   };
   return fetch("/question-answer/api/report_issue/", {
      method: "POST",
      body: JSON.stringify(dataToSend),
   });
}

export function get_slug_from_id(id) {
   var dataToSend = {
      id: id,
   };
   return fetch("/question-answer/api/get_slug_from_id/", {
      method: "POST",
      body: JSON.stringify(dataToSend),
   });
}

export function getSearchHistory(limit) {
   var dataToSend = {
      userToken: getCookie("userToken"),
      limit: limit,
   };
   return fetch("/question-answer/api/questions_by_user/", {
      method: "POST",
      body: JSON.stringify(dataToSend),
   });
}

export function get_exam_from_id(id) {
   var dataToSend = {
      id: id,
   };
   return fetch("/question-answer/api/get_exam_from_id/", {
      method: "POST",
      body: JSON.stringify(dataToSend),
   });
}

export function get_video_manifest(url) {
   var dataToSend = {
      url: url,
   };
   return fetch("/api/get_video_manifest/", {
      method: "POST",
      body: JSON.stringify(dataToSend),
   });
}

export function get_request_otp(extension, phone) {
   return fetch("/question-answer/api/request_otp/", {
      method: "POST",
      body: extension + "-" + phone,
   });
}

export function validate_otp(otpResponse) {
   return fetch("/question-answer/api/validate_otp/", {
      method: "POST",
      body: JSON.stringify(otpResponse),
   });
}

export function access_token_request(code) {
   let dataToSend = {
      client_id: id_service_client_id,
      redirect_uri: redirect_uri,
      grant_type: "authorization_code",
      code: code,
   };
   return fetch("/question-answer/api/access_token_request/", {
      method: "POST",
      body: JSON.stringify(dataToSend),
   });
}

export function removeSpaces(input, sol = false) {
   if (!input) {
      return input;
   }
   var output = input;
   output = output.replace(/&nbsp;/g, " ");
   output = output.replace(/&#xA0;/g, " ");
   output = output.replace("<p>", '<p style="display:inline">');
   if (sol) {
      output = output.replace("<img", '<img loading="lazy" ');
   }
   var re = new RegExp(String.fromCharCode(160), "g");
   output = output.replace(re, " ");
   return output;
}

export function onSubmitFeedbackRating(videoId, userId, rating) {
   var dataToSendSolutionVideoRating = {
      videoId: videoId,
      userId: userId,
      rating: rating,
   };
   return fetch("/question-answer/api/solution_video_rating/", {
      method: "POST",
      body: JSON.stringify(dataToSendSolutionVideoRating),
   });
}

export function getUserDetails(token, id) {
   var dataToSend = {
      id: id,
      token: token,
   };
   return fetch("/question-answer/api/get_user_details/", {
      method: "POST",
      body: JSON.stringify(dataToSend),
   });
}

export function onWatchingVideo(videoId, userId) {
   var dataToSendSolutionVideoViews = {
      videoId: videoId,
      userId: userId,
   };
   return fetch("/question-answer/api/solution_video_views/", {
      method: "POST",
      body: JSON.stringify(dataToSendSolutionVideoViews),
   });
}

export function getDrmData() {
   return fetch("/api/get_drm_data/", {
      method: "GET",
   });
}

export function saveHistory(dataToSendSaveHistory) {
   return fetch("/question-answer/api/save_history/", {
      method: "POST",
      body: JSON.stringify(dataToSendSaveHistory),
   });
}

export function removeQuestionCookies() {
   removeCookies("parent_page_name");
   removeCookies("tag_id");
}

export function getVideoData(dataToSend) {
   return fetch("/question-answer/api/get_video_data/", {
      method: "POST",
      body: JSON.stringify({ video_id: dataToSend }),
   });
}

export const encodeToQueryParam = (inputStr) => {
   let outputStr = inputStr.replaceAll("%", "-pcnt-");
   outputStr = outputStr.replaceAll("/", "-frc-");
   outputStr = outputStr.replaceAll("+", "-pls-");
   outputStr = outputStr.replaceAll(" ", "-spce-");
   outputStr = outputStr.replaceAll("^", "-powr-");
   outputStr = outputStr.replaceAll("=", "-eql-");
   return outputStr;
};

export const decodeFromQueryParam = (inputStr) => {
   let outputStr = inputStr.replace(/-pcnt-/g, "%");
   outputStr = outputStr.replace(/-frc-/g, "/");
   outputStr = outputStr.replace(/-pls-/g, "+");
   outputStr = outputStr.replace(/-powr-/g, "^");
   outputStr = outputStr.replace(/-eql-/g, "=");
   outputStr = outputStr.replace(/-spce-/g, " ");
   return outputStr;
};
