package com.fangzhi.cloud.blog.dao.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BlogArticleExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public BlogArticleExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andTitleIsNull() {
            addCriterion("title is null");
            return (Criteria) this;
        }

        public Criteria andTitleIsNotNull() {
            addCriterion("title is not null");
            return (Criteria) this;
        }

        public Criteria andTitleEqualTo(String value) {
            addCriterion("title =", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotEqualTo(String value) {
            addCriterion("title <>", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleGreaterThan(String value) {
            addCriterion("title >", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleGreaterThanOrEqualTo(String value) {
            addCriterion("title >=", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleLessThan(String value) {
            addCriterion("title <", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleLessThanOrEqualTo(String value) {
            addCriterion("title <=", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleLike(String value) {
            addCriterion("title like", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotLike(String value) {
            addCriterion("title not like", value, "title");
            return (Criteria) this;
        }

        public Criteria andTitleIn(List<String> values) {
            addCriterion("title in", values, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotIn(List<String> values) {
            addCriterion("title not in", values, "title");
            return (Criteria) this;
        }

        public Criteria andTitleBetween(String value1, String value2) {
            addCriterion("title between", value1, value2, "title");
            return (Criteria) this;
        }

        public Criteria andTitleNotBetween(String value1, String value2) {
            addCriterion("title not between", value1, value2, "title");
            return (Criteria) this;
        }

        public Criteria andAuthorIdIsNull() {
            addCriterion("author_id is null");
            return (Criteria) this;
        }

        public Criteria andAuthorIdIsNotNull() {
            addCriterion("author_id is not null");
            return (Criteria) this;
        }

        public Criteria andAuthorIdEqualTo(Integer value) {
            addCriterion("author_id =", value, "authorId");
            return (Criteria) this;
        }

        public Criteria andAuthorIdNotEqualTo(Integer value) {
            addCriterion("author_id <>", value, "authorId");
            return (Criteria) this;
        }

        public Criteria andAuthorIdGreaterThan(Integer value) {
            addCriterion("author_id >", value, "authorId");
            return (Criteria) this;
        }

        public Criteria andAuthorIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("author_id >=", value, "authorId");
            return (Criteria) this;
        }

        public Criteria andAuthorIdLessThan(Integer value) {
            addCriterion("author_id <", value, "authorId");
            return (Criteria) this;
        }

        public Criteria andAuthorIdLessThanOrEqualTo(Integer value) {
            addCriterion("author_id <=", value, "authorId");
            return (Criteria) this;
        }

        public Criteria andAuthorIdIn(List<Integer> values) {
            addCriterion("author_id in", values, "authorId");
            return (Criteria) this;
        }

        public Criteria andAuthorIdNotIn(List<Integer> values) {
            addCriterion("author_id not in", values, "authorId");
            return (Criteria) this;
        }

        public Criteria andAuthorIdBetween(Integer value1, Integer value2) {
            addCriterion("author_id between", value1, value2, "authorId");
            return (Criteria) this;
        }

        public Criteria andAuthorIdNotBetween(Integer value1, Integer value2) {
            addCriterion("author_id not between", value1, value2, "authorId");
            return (Criteria) this;
        }

        public Criteria andAuthorAvatarIsNull() {
            addCriterion("author_avatar is null");
            return (Criteria) this;
        }

        public Criteria andAuthorAvatarIsNotNull() {
            addCriterion("author_avatar is not null");
            return (Criteria) this;
        }

        public Criteria andAuthorAvatarEqualTo(String value) {
            addCriterion("author_avatar =", value, "authorAvatar");
            return (Criteria) this;
        }

        public Criteria andAuthorAvatarNotEqualTo(String value) {
            addCriterion("author_avatar <>", value, "authorAvatar");
            return (Criteria) this;
        }

        public Criteria andAuthorAvatarGreaterThan(String value) {
            addCriterion("author_avatar >", value, "authorAvatar");
            return (Criteria) this;
        }

        public Criteria andAuthorAvatarGreaterThanOrEqualTo(String value) {
            addCriterion("author_avatar >=", value, "authorAvatar");
            return (Criteria) this;
        }

        public Criteria andAuthorAvatarLessThan(String value) {
            addCriterion("author_avatar <", value, "authorAvatar");
            return (Criteria) this;
        }

        public Criteria andAuthorAvatarLessThanOrEqualTo(String value) {
            addCriterion("author_avatar <=", value, "authorAvatar");
            return (Criteria) this;
        }

        public Criteria andAuthorAvatarLike(String value) {
            addCriterion("author_avatar like", value, "authorAvatar");
            return (Criteria) this;
        }

        public Criteria andAuthorAvatarNotLike(String value) {
            addCriterion("author_avatar not like", value, "authorAvatar");
            return (Criteria) this;
        }

        public Criteria andAuthorAvatarIn(List<String> values) {
            addCriterion("author_avatar in", values, "authorAvatar");
            return (Criteria) this;
        }

        public Criteria andAuthorAvatarNotIn(List<String> values) {
            addCriterion("author_avatar not in", values, "authorAvatar");
            return (Criteria) this;
        }

        public Criteria andAuthorAvatarBetween(String value1, String value2) {
            addCriterion("author_avatar between", value1, value2, "authorAvatar");
            return (Criteria) this;
        }

        public Criteria andAuthorAvatarNotBetween(String value1, String value2) {
            addCriterion("author_avatar not between", value1, value2, "authorAvatar");
            return (Criteria) this;
        }

        public Criteria andAuthorNicknameIsNull() {
            addCriterion("author_nickname is null");
            return (Criteria) this;
        }

        public Criteria andAuthorNicknameIsNotNull() {
            addCriterion("author_nickname is not null");
            return (Criteria) this;
        }

        public Criteria andAuthorNicknameEqualTo(String value) {
            addCriterion("author_nickname =", value, "authorNickname");
            return (Criteria) this;
        }

        public Criteria andAuthorNicknameNotEqualTo(String value) {
            addCriterion("author_nickname <>", value, "authorNickname");
            return (Criteria) this;
        }

        public Criteria andAuthorNicknameGreaterThan(String value) {
            addCriterion("author_nickname >", value, "authorNickname");
            return (Criteria) this;
        }

        public Criteria andAuthorNicknameGreaterThanOrEqualTo(String value) {
            addCriterion("author_nickname >=", value, "authorNickname");
            return (Criteria) this;
        }

        public Criteria andAuthorNicknameLessThan(String value) {
            addCriterion("author_nickname <", value, "authorNickname");
            return (Criteria) this;
        }

        public Criteria andAuthorNicknameLessThanOrEqualTo(String value) {
            addCriterion("author_nickname <=", value, "authorNickname");
            return (Criteria) this;
        }

        public Criteria andAuthorNicknameLike(String value) {
            addCriterion("author_nickname like", value, "authorNickname");
            return (Criteria) this;
        }

        public Criteria andAuthorNicknameNotLike(String value) {
            addCriterion("author_nickname not like", value, "authorNickname");
            return (Criteria) this;
        }

        public Criteria andAuthorNicknameIn(List<String> values) {
            addCriterion("author_nickname in", values, "authorNickname");
            return (Criteria) this;
        }

        public Criteria andAuthorNicknameNotIn(List<String> values) {
            addCriterion("author_nickname not in", values, "authorNickname");
            return (Criteria) this;
        }

        public Criteria andAuthorNicknameBetween(String value1, String value2) {
            addCriterion("author_nickname between", value1, value2, "authorNickname");
            return (Criteria) this;
        }

        public Criteria andAuthorNicknameNotBetween(String value1, String value2) {
            addCriterion("author_nickname not between", value1, value2, "authorNickname");
            return (Criteria) this;
        }

        public Criteria andEditorIsNull() {
            addCriterion("editor is null");
            return (Criteria) this;
        }

        public Criteria andEditorIsNotNull() {
            addCriterion("editor is not null");
            return (Criteria) this;
        }

        public Criteria andEditorEqualTo(String value) {
            addCriterion("editor =", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorNotEqualTo(String value) {
            addCriterion("editor <>", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorGreaterThan(String value) {
            addCriterion("editor >", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorGreaterThanOrEqualTo(String value) {
            addCriterion("editor >=", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorLessThan(String value) {
            addCriterion("editor <", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorLessThanOrEqualTo(String value) {
            addCriterion("editor <=", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorLike(String value) {
            addCriterion("editor like", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorNotLike(String value) {
            addCriterion("editor not like", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorIn(List<String> values) {
            addCriterion("editor in", values, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorNotIn(List<String> values) {
            addCriterion("editor not in", values, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorBetween(String value1, String value2) {
            addCriterion("editor between", value1, value2, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorNotBetween(String value1, String value2) {
            addCriterion("editor not between", value1, value2, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorThemeIsNull() {
            addCriterion("editor_theme is null");
            return (Criteria) this;
        }

        public Criteria andEditorThemeIsNotNull() {
            addCriterion("editor_theme is not null");
            return (Criteria) this;
        }

        public Criteria andEditorThemeEqualTo(String value) {
            addCriterion("editor_theme =", value, "editorTheme");
            return (Criteria) this;
        }

        public Criteria andEditorThemeNotEqualTo(String value) {
            addCriterion("editor_theme <>", value, "editorTheme");
            return (Criteria) this;
        }

        public Criteria andEditorThemeGreaterThan(String value) {
            addCriterion("editor_theme >", value, "editorTheme");
            return (Criteria) this;
        }

        public Criteria andEditorThemeGreaterThanOrEqualTo(String value) {
            addCriterion("editor_theme >=", value, "editorTheme");
            return (Criteria) this;
        }

        public Criteria andEditorThemeLessThan(String value) {
            addCriterion("editor_theme <", value, "editorTheme");
            return (Criteria) this;
        }

        public Criteria andEditorThemeLessThanOrEqualTo(String value) {
            addCriterion("editor_theme <=", value, "editorTheme");
            return (Criteria) this;
        }

        public Criteria andEditorThemeLike(String value) {
            addCriterion("editor_theme like", value, "editorTheme");
            return (Criteria) this;
        }

        public Criteria andEditorThemeNotLike(String value) {
            addCriterion("editor_theme not like", value, "editorTheme");
            return (Criteria) this;
        }

        public Criteria andEditorThemeIn(List<String> values) {
            addCriterion("editor_theme in", values, "editorTheme");
            return (Criteria) this;
        }

        public Criteria andEditorThemeNotIn(List<String> values) {
            addCriterion("editor_theme not in", values, "editorTheme");
            return (Criteria) this;
        }

        public Criteria andEditorThemeBetween(String value1, String value2) {
            addCriterion("editor_theme between", value1, value2, "editorTheme");
            return (Criteria) this;
        }

        public Criteria andEditorThemeNotBetween(String value1, String value2) {
            addCriterion("editor_theme not between", value1, value2, "editorTheme");
            return (Criteria) this;
        }

        public Criteria andUserLikeIsNull() {
            addCriterion("user_like is null");
            return (Criteria) this;
        }

        public Criteria andUserLikeIsNotNull() {
            addCriterion("user_like is not null");
            return (Criteria) this;
        }

        public Criteria andUserLikeEqualTo(Integer value) {
            addCriterion("user_like =", value, "userLike");
            return (Criteria) this;
        }

        public Criteria andUserLikeNotEqualTo(Integer value) {
            addCriterion("user_like <>", value, "userLike");
            return (Criteria) this;
        }

        public Criteria andUserLikeGreaterThan(Integer value) {
            addCriterion("user_like >", value, "userLike");
            return (Criteria) this;
        }

        public Criteria andUserLikeGreaterThanOrEqualTo(Integer value) {
            addCriterion("user_like >=", value, "userLike");
            return (Criteria) this;
        }

        public Criteria andUserLikeLessThan(Integer value) {
            addCriterion("user_like <", value, "userLike");
            return (Criteria) this;
        }

        public Criteria andUserLikeLessThanOrEqualTo(Integer value) {
            addCriterion("user_like <=", value, "userLike");
            return (Criteria) this;
        }

        public Criteria andUserLikeIn(List<Integer> values) {
            addCriterion("user_like in", values, "userLike");
            return (Criteria) this;
        }

        public Criteria andUserLikeNotIn(List<Integer> values) {
            addCriterion("user_like not in", values, "userLike");
            return (Criteria) this;
        }

        public Criteria andUserLikeBetween(Integer value1, Integer value2) {
            addCriterion("user_like between", value1, value2, "userLike");
            return (Criteria) this;
        }

        public Criteria andUserLikeNotBetween(Integer value1, Integer value2) {
            addCriterion("user_like not between", value1, value2, "userLike");
            return (Criteria) this;
        }

        public Criteria andGmtCreateIsNull() {
            addCriterion("gmt_create is null");
            return (Criteria) this;
        }

        public Criteria andGmtCreateIsNotNull() {
            addCriterion("gmt_create is not null");
            return (Criteria) this;
        }

        public Criteria andGmtCreateEqualTo(Date value) {
            addCriterion("gmt_create =", value, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateNotEqualTo(Date value) {
            addCriterion("gmt_create <>", value, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateGreaterThan(Date value) {
            addCriterion("gmt_create >", value, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateGreaterThanOrEqualTo(Date value) {
            addCriterion("gmt_create >=", value, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateLessThan(Date value) {
            addCriterion("gmt_create <", value, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateLessThanOrEqualTo(Date value) {
            addCriterion("gmt_create <=", value, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateIn(List<Date> values) {
            addCriterion("gmt_create in", values, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateNotIn(List<Date> values) {
            addCriterion("gmt_create not in", values, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateBetween(Date value1, Date value2) {
            addCriterion("gmt_create between", value1, value2, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtCreateNotBetween(Date value1, Date value2) {
            addCriterion("gmt_create not between", value1, value2, "gmtCreate");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedIsNull() {
            addCriterion("gmt_modified is null");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedIsNotNull() {
            addCriterion("gmt_modified is not null");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedEqualTo(Date value) {
            addCriterion("gmt_modified =", value, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedNotEqualTo(Date value) {
            addCriterion("gmt_modified <>", value, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedGreaterThan(Date value) {
            addCriterion("gmt_modified >", value, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedGreaterThanOrEqualTo(Date value) {
            addCriterion("gmt_modified >=", value, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedLessThan(Date value) {
            addCriterion("gmt_modified <", value, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedLessThanOrEqualTo(Date value) {
            addCriterion("gmt_modified <=", value, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedIn(List<Date> values) {
            addCriterion("gmt_modified in", values, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedNotIn(List<Date> values) {
            addCriterion("gmt_modified not in", values, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedBetween(Date value1, Date value2) {
            addCriterion("gmt_modified between", value1, value2, "gmtModified");
            return (Criteria) this;
        }

        public Criteria andGmtModifiedNotBetween(Date value1, Date value2) {
            addCriterion("gmt_modified not between", value1, value2, "gmtModified");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}