// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (IsMapVariation(0)) {
        if (EventFlag(49720000)) {
            $InitializeCommonEvent(0, 90055000, 49725200, 1, 49722200, 49720201);
            $InitializeCommonEvent(0, 90055001, 49725200, 1, 49720201, 49720200);
        }
        if (EventFlag(49720001)) {
            $InitializeCommonEvent(0, 90055000, 49725200, 2, 49722200, 49720201);
            $InitializeCommonEvent(0, 90055001, 49725200, 2, 49720201, 49720200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49720200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49722200, 49720200);
    }
    $InitializeCommonEvent(0, 90065143, 49720200, 49720205, 49720800, 942000, 690047, 49725210, 49720800, 903800700, 49720810, 903800701, 49720820, 903800702);
    $InitializeCommonEvent(0, 90065911, 49720200, 49720800, 942000, 49725210, 49720800, 903800700, 49720810, 903800701, 49720820, 903800702, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49720800, 1, 0, 0, 1050, 942000, 903800700, 49720800);
    }
    $InitializeCommonEvent(0, 90015012, 49725210, 49720200);
    $InitializeCommonEvent(1, 90015012, 0, 49720200);
    $InitializeCommonEvent(0, 90015020, 49720200, 49720800);
    $InitializeCommonEvent(0, 90015008, 49720205, 49720800, 942000, 49725210, -1, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065141, 49720800, 49720810, 49720820, 49720200, 49720800, 903800702, 49720206);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065142, 49720800, 49700810, 49720820, 49720200, 49720800, 903800702, 49720206, 49720207);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49722200, 49720800);
        $InitializeCommonEvent(0, 90015023, 49720200, 40, 0, 49725210, 49720800, 903800700, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015026, 49720206, 40, 0, 49725210, 49720810, 903800701);
        $InitializeCommonEvent(0, 90015026, 49720206, 40, 0, 49725210, 49720820, 903800702);
        $InitializeCommonEvent(0, 90015030, 49720200, 49725210, 40, 942000, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49720200, 49720800, 49725210, 1020, 942000, 110320, 903800700, 49720800);
        $InitializeCommonEvent(0, 90015470, 49722200, 49720200, 49720800, 49725210, 0, 0, 49725210);
        $InitializeCommonEvent(0, 90015478, 49720800, 49720800);
        $InitializeCommonEvent(0, 90015478, 49720810, 49720800);
        $InitializeCommonEvent(0, 90015478, 49720820, 49720800);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015446, 49725210, 49720200, 49720800, 49722200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015460, 49722200, 49720800);
        $InitializeCommonEvent(0, 90015460, 49722200, 49720810);
        $InitializeCommonEvent(0, 90015460, 49722200, 49720820);
        $InitializeCommonEvent(0, 90015460, 49722200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49722200, 49720800);
        $InitializeCommonEvent(0, 90015475, 49722200, 49720810);
        $InitializeCommonEvent(0, 90015475, 49722200, 49720820);
        $InitializeCommonEvent(0, 90015475, 49722200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49720800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49720000, 49720300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49720000, 49720300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49720000, 49720300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49720000, 49720300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49720000, 49720300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49720000, 49720300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49720000, 49720301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49720000, 49720301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49720000, 49720301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49720000, 49720301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49720000, 49720301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49720000, 49720301);
    }
});

$Event(49722800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFor(HPRatio(chrEntityId3) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 902500520);
    DisplayBossHealthBar(Disabled, chrEntityId3, 1, 902500520);
    if (assetEntityId != 0) {
        EnableAsset(assetEntityId);
    }
    if (chrEntityId2 != 0) {
        EnableCharacter(chrEntityId2);
    }
    if (!EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(3));
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId3);
});

$Event(49722810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5, chrEntityId2) {
    if (EventFlag(eventFlagId4) || EventFlag(eventFlagId5)) {
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterCollision(chrEntityId2);
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId2);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId2);
    flag = EventFlag(7515) && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFixedTimeSeconds(1);
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId2);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterCollision(chrEntityId2);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(48600800, 20005, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId2);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
    SetNetworkUpdateRate(48600800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
});


